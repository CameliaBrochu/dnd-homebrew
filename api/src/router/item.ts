import { Request, Response } from "express";
import { v4 as uuid } from 'uuid';
import { Router } from "express";
import { connectDb } from "../db";
import { items } from "../model/item";

const ItemRouter = Router();

type ItemModel = typeof items.$inferInsert;


/*ItemRouter.use((req, res, next) => {
    console.log("middleware")
    next()
})*/


ItemRouter.get("/", async (req, res) => {
    const db = await connectDb();

    const result = await db.select().from(items)

    res.send(result);
})


ItemRouter.put("/add", async (req: Request<{}, {}, ItemModel>, res: Response) => {
    const db = await connectDb();

    req.body.id = uuid();

    await db.insert(items).values(req.body);
    res.end();
})

export default ItemRouter;