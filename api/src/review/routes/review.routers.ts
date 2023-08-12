import { Router } from "express";
import { Review } from "../entities/Review";
import { User } from "../../users/entities/User";
import { ReviewController } from "../controllers/review.controllers";
import { Guide } from "../../guides/entities/Guide";

const router = Router();
const reviewController = new ReviewController(Review, User, Guide);

//Crear Review
router.post("/reviews/:userId/:guideId", (req, res) =>
  reviewController.createReviews(req, res)
);

//Get Review by review_ID
router.get("/reviews/by-review/:reviewId", (req, res) =>
  reviewController.getReviewById(req, res)
);

//Get Review by Guide_ID
router.get("/reviews/by-guide/:guideId", (req, res) =>
  reviewController.getReviewByGuideId(req, res)
);

//Get review by User_ID
router.get("/reviews/by-user/:userId", (req, res) =>
  reviewController.getReviewByUserId(req, res)
);

export default router;
