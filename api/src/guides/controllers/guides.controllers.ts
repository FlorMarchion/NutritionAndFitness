import { Request, Response } from "express";
import { Guide } from "../entities/Guide";
import { Admin } from "../../admin/entities/Admin";

export class GuideController {
  constructor(
    private guideRepository: typeof Guide,
    private adminRepository: typeof Admin
  ) {}

  async createGuides(_req: Request, res: Response) {
    const { title, file, image, category, description, duration, price, size } =
      _req.body;

    try {
      const { adminId } = _req.params;
      const adminIdParams: any = await this.adminRepository.findOneBy({
        id: parseInt(adminId),
      });

      const guide = this.guideRepository.create({
        title,
        file,
        image,
        category,
        description,
        duration,
        price,
        size,
        admin: adminIdParams,
      });

      if (!adminIdParams) {
        return res.status(404).json({ message: "Guide does not exist" });
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

  async getGuides(_req: Request, res: Response) {
    try {
      const guides = await this.guideRepository.find({
        relations: ["admin"],
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

  getGuideById = async (_req: Request, res: Response) => {
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
    }

    return res.status(500).json({ message: "Internal Server Error" });
  };

  updateGuide = async (_req: Request, res: Response) => {
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

    // Si ocurre algún error inesperado, devuelve una respuesta con estado 500
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
