import { connectDb } from "@/db";
import { items } from "@/model/item";

type ItemModel = typeof items.$inferInsert;

export const getItems = async () => {
    const db = await connectDb();

    return await db.select().from(items)
}

export const addItem = async (newItem: ItemModel) =>{
    const db = await connectDb();

    await db.insert(items).values(newItem);
}