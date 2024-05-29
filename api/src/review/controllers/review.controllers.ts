import { Request, Response } from "express";
import { Review } from "../entities/Review";
import { User } from "../../users/entities/User";
// import { Guide } from "../../guides/entities/Guide";

export class ReviewController {
  constructor(
    private reviewRepository: typeof Review,
    private userRepository: typeof User,
    // private guideRepository: typeof Guide
  ) {}

  // async createReviews(req: Request, res: Response) {
  //   const { description } = req.body;
  //   try {
  //     const { userId, guideId } = req.params;
  //     const userIdParams: any = await this.userRepository.findOneBy({
  //       id: parseInt(userId),
  //     });

  //     const guideIdParams: any = await this.guideRepository.findOneBy({
  //       id: parseInt(guideId),
  //     });

  //     const review = this.reviewRepository.create({
  //       description,
  //       users: userIdParams,
  //       guide: guideIdParams,
  //     });

  //     if (!userIdParams) {
  //       return res.status(404).json({ message: "User not found" });
  //     }
  //     if (!guideIdParams) {
  //       return res.status(404).json({ message: "Guide not found" });
  //     }

  //     await this.reviewRepository.save(review);
  //     if (!review) {
  //       throw new Error("Review not created");
  //     }
  //     return res.status(200).json(review);
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       res.status(400).json({ message: error.message });
  //     }
  //   }
  //   return res.status(500).json({ message: "Unknown error" });
  // }

  async getReviewById(req: Request, res: Response) {
    try {
      const { reviewId } = req.params;
      const reviewIdFinded = await this.reviewRepository.findOne({
        where: {
          id: parseInt(reviewId),
        },
        relations: ["users"],
      });

      if (!reviewIdFinded) {
        return res.status(404).json({ message: "Review not found" });
      }
      return res.status(200).json({
        reviewIdFinded,
        message: "Getting guide by ID",
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ message: "Unknown Error" });
    }
  }

  // async getReviewByGuideId(req: Request, res: Response) {
  //   try {
  //     const { guideId } = req.params;
  //     const guideFinded: any = await this.guideRepository.findOne({
  //       where: {
  //         id: parseInt(guideId),
  //       },
  //     });
  //     const reviewFindedByGuideId = await this.reviewRepository.findOne({
  //       where: {
  //         guide: guideFinded.id,
  //       },
  //     });

  //     if (!reviewFindedByGuideId) {
  //       return res.status(404).json({ message: "Guide not found" });
  //     }
  //     return res
  //       .status(200)
  //       .json({ reviewFindedByGuideId, message: "Getting review by Guide ID" });
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       return res.status(404).json({ message: error.message });
  //     }
  //     return res.status(500).json({ message: "Unknow Error" });
  //   }
  // }

  async getReviewByUserId(req: Request, res: Response){
    try {
      const { userId } = req.params;
      const userFinded: any = await this.userRepository.findOne({
        where: {
          id: parseInt(userId),
        },
      });
      const reviewFindedByUserId = await this.reviewRepository.findOne({
        where: {
          users: userFinded.id,
        },
      });

      if (!reviewFindedByUserId) {
        return res.status(404).json({ message: "User not found" });
      }
      return res
        .status(200)
        .json({ reviewFindedByUserId, message: "Getting Review by User ID" });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: "Unknow Error" });
    }
  };
}
