import { Router } from "express";
import { UserController } from "../controller/UserController.js";

const router = Router();

router.get("/users", UserController.findAll);
router.get("/users/:username", UserController.findUserByName);
router.post("/users", UserController.save);

export default router;