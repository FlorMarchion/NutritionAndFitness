import { Request, Response } from "express";
import { Guide } from "../entities/Guide";
import { Admin } from "../../admin/entities/Admin";
import { CategoryGuide } from "../entities/CategoryGuide";
import { GuideFilterQueryType } from "../types/guides.types";

export class GuideController {
  constructor(
    private guideRepository: typeof Guide,
    private adminRepository: typeof Admin,
    private categoryGuideRepository: typeof CategoryGuide
  ) { }

  async createGuides(_req: Request, res: Response) {
    const { title, file, image, diet, description, duration, price, size } =
      _req.body;

    try {
      const { adminId } = _req.params;
      const adminIdParams: any = await this.adminRepository.findOneBy({
        id: parseInt(adminId),
      });

      const { categoryGuideId } = _req.body;
      const categoryId: any = await this.categoryGuideRepository.findOneBy({
        id: parseInt(categoryGuideId),
      });

      const guide = this.guideRepository.create({
        title,
        file,
        image,
        diet,
        description,
        duration,
        price,
        size,
        admin: adminIdParams,
        categoryGuide: categoryId,
      });

      if (!adminIdParams) {
        return res.status(404).json({ message: "Admin does not exist" });
      }

      await this.guideRepository.save(guide);
      if (!guide) {
        throw new Error("Guide not created");
      }
      return res.status(200).json(guide);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ message: "Unknown Error" });
    }
  }

  async createCategoryGuide(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const existingCategory = await this.categoryGuideRepository.findOneBy({
        name,
      });
      if (existingCategory) {
        return res
          .status(400)
          .json({ message: "This category already exists" });
      }

      const category = this.categoryGuideRepository.create({
        name: name,
      });
      await this.categoryGuideRepository.save(category);

      if (!category) {
        throw new Error("CategoryGuide not created");
      }
      return res.status(200).json(category);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ message: "Internal Error" });
    }
  }

  async getGuides(_req: Request, res: Response) {
    try {
      const guides = await this.guideRepository.find({
        relations: ["admin", "categoryGuide"],
      });
      if (guides.length > 0) {
        return res.json(guides);
      } else {
        const error = new Error("No guides found");
        return res.status(500).json({ message: error.message });
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ message: "Unknown Error" });
    }
  }

  async getGuidesByTitleAndDescription(req: Request, res: Response) {
    try {
      const keyword = req.query.keyword;

      const qb = await this.guideRepository.createQueryBuilder('guide');

      // Join and select the categoryGuide data
      qb.leftJoinAndSelect('guide.categoryGuide', 'categoryGuide');

      // Apply eager loading using QueryBuilder options
      const options: any = { relations: ['categoryGuide'] };

      const foundGuides = await qb
        .orWhere('guide.title ILIKE :keyword', { keyword: '%' + keyword + '%' })
        .orWhere('guide.description ILIKE :keyword', { keyword: '%' + keyword + '%' })
        .setOption(options)
        .getMany();

      console.log(qb.getSql());
      if (foundGuides.length > 0) {
        res.status(200).json(foundGuides);
      } else {
        res.status(404).json({ message: "No guides were found with that keyword" });
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Unknown Error" });
      }
    }
  }

  async getAllCategories(_req: Request, res: Response) {
    try {
      const categories = await this.categoryGuideRepository.find({
        relations: ["guides"],
      });

      if (categories.length > 0) {
        return res.json(categories);
      } else {
        const error = new Error("No guides found");
        return res.status(500).json({ message: error.message });
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ message: "Unknown Error" });
    }
  }

  async getGuideByCategoryId(_req: Request, res: Response) {
    try {
      const { categoryId } = _req.params;
      const guides = await this.guideRepository.find({
        where: { categoryGuide: { id: parseInt(categoryId) } },
      });

      if (!guides || guides.length === 0) {
        return res
          .status(404)
          .json({ message: "No guides found for the specified category." });
      }

      return res
        .status(200)
        .json({ guides, message: "Guides for the specified category." });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getGuideById(_req: Request, res: Response) {
    try {
      const { id } = _req.params;
      const guide = await this.guideRepository.findOneBy({ id: parseInt(id) });

      if (!guide) {
        return res.status(404).json({ message: "Guide does not exist" });
      }
      return res.status(200).json({ guide, message: "Getting guide by ID" });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };

  async getGuidesFiltered(_req: Request, res: Response) {
    // los query params son formato strings
    const {
      categoryId,
      diet,
      duration,
      // page,
      // asc,
      // rate
    } = _req.query as GuideFilterQueryType;

    let filters: any = {};

    if (categoryId !== 'null') {
      filters.categoryGuide = {
        id: parseInt(categoryId),
      }
    }

    if (diet !== 'null') {
      filters.diet = diet
    }

    if (duration !== 'null') {
      filters.duration = duration
    }

    try {
      const result = await this.guideRepository.find({
        relations: ["categoryGuide"],
        where: filters,
        // take: 10, // OPCIONES DE QUERY PARA PAGINADO
        // skip: page,
      });

      return res.status(200).json({ result });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async updateGuide(_req: Request, res: Response) {
    try {
      const { id } = _req.params;
      const guide = await this.guideRepository.findOne({
        where: {
          id: parseInt(id),
        },
      });

      if (!guide) {
        return res.status(404).json({ message: "Guide does not exist" });
      }

      await Guide.update({ id: parseInt(id) }, _req.body);
      return res.status(200).json({ message: "Successfully modified guide !" });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
    return res.status(500).json({ message: "Internal Server Error" });
  };

  async deleteGuide(_req: Request, res: Response) {
    try {
      const { id } = _req.params;
      const guideId = await this.guideRepository.findOne({
        where: {
          id: parseInt(id),
        },
      });
      if (!guideId)
        return res.status(404).json({ message: "Guide ID not exist" });
      await Guide.delete({ id: parseInt(id) });
      return res.status(200).json({ message: "Guide deleted successfully" });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      }
    }
    return res.status(500).json({ message: "Unknow error" });
  }
}
