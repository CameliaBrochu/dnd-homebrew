import { Request, Response } from "express";
import { v4 as uuid } from 'uuid';
import { Router } from "express";
import { items } from "@/model/item";
import { getItems, addItem, deleteItem, getItem } from "@/router/item/item-service";
import { UUID } from "crypto";
import { ApiResponse } from "@/types";

const ItemController = Router();

type ItemModel = typeof items.$inferSelect;
type NewItemModel = typeof items.$inferInsert;
type ItemIdParam = {
    id: UUID
}


/*ItemRouter.use((req, res, next) => {
    console.log("middleware")
    next()
})*/


ItemController.get("/", async (req: Request<{}, {}, {}>, res: Response<ApiResponse<ItemModel[]>>) => {

    const result = await getItems();

    const response: ApiResponse<ItemModel[]> = {
        success: true,
        error: "",
        data: result
    }

    res.send(response);
})

ItemController.get("/:id", async (req: Request<ItemIdParam, {}, {}>, res: Response<ApiResponse<ItemModel>>) => {

    const result = await getItem(req.params.id);

    const response: ApiResponse<ItemModel> = {
        success: true,
        error: "",
        data: result[0]
    }

    res.send(response);
})


ItemController.post("/", async (req: Request<{}, {}, NewItemModel>, res: Response) => {

    req.body.id = uuid();

    await addItem(req.body);

    res.end();
})


ItemController.delete("/:id", async (req: Request<ItemIdParam, {}, {}>, res: Response) => {

    await deleteItem(req.params.id);

    res.end();
})

export default ItemController;