import { Router } from "express";
import { PostController } from "../controller/PostController.js";

const router = Router();

router.get("/posts", PostController.findAll);
router.get("/posts/user/:id", PostController.findByUserId);
router.post("/posts", PostController.save);

export default router;