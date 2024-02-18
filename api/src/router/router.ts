import { Request, Response } from "express";
import { Router } from "express";
import ItemController from "@/router/item/item-controller";
import AuthController from "./auth/auth-controller";

const router = Router()

router.use("/items", ItemController);
router.use("/login", AuthController);

export default router;