import { Request, Response } from "express";
import { v4 as uuid } from 'uuid';
import { Router } from "express";
import { items } from "@/model/item";
import { getItems, addItem } from "@/router/item/item-service";

const ItemController = Router();

type ItemModel = typeof items.$inferInsert;


/*ItemRouter.use((req, res, next) => {
    console.log("middleware")
    next()
})*/


ItemController.get("/", async (req, res) => {

    const result = await getItems();

    res.send(result);
})


ItemController.put("/add", async (req: Request<{}, {}, ItemModel>, res: Response) => {

    req.body.id = uuid();

    await addItem(req.body);

    res.end();
})

export default ItemController;