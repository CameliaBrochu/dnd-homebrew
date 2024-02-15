import { Request, Response } from "express";
import { v4 as uuid } from 'uuid';
import { Router } from "express";
import { items } from "@/model/item";
import { getItems, addItem, deleteItem, getItem } from "@/router/item/item-service";
import { UUID } from "crypto";

const ItemController = Router();

type ItemModel = typeof items.$inferInsert;
type ItemIdParam = {
    id: UUID
}


/*ItemRouter.use((req, res, next) => {
    console.log("middleware")
    next()
})*/


ItemController.get("/", async (req: Request<{}, {}, {}>, res: Response) => {

    const result = await getItems();

    res.send(result);
})

ItemController.get("/:id", async (req: Request<ItemIdParam, {}, {}>, res: Response) => {

    const result = await getItem(req.params.id);

    res.send(result);
})


ItemController.put("/add", async (req: Request<{}, {}, ItemModel>, res: Response) => {

    req.body.id = uuid();

    await addItem(req.body);

    res.end();
})


ItemController.delete("/delete/:id", async (req: Request<ItemIdParam, {}, {}>, res: Response) => {

    await deleteItem(req.params.id);

    res.end();
})

export default ItemController;