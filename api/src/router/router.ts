import { Request, Response } from "express";
import { Router } from "express";
import ItemController from "@/router/item/item-controller";

const router = Router()

router.use("/items", ItemController);

export default router;