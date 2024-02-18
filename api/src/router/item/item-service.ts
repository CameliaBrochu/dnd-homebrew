import { connectDb } from "@/db";
import { items } from "@/model/item";
import { UUID } from "crypto";
import { eq } from "drizzle-orm";

type NewItemModel = typeof items.$inferInsert;

export const getItems = async () => {
    const db = await connectDb();

    return await db.select().from(items)
}

export const getItem = async (id: UUID) =>{
    const db = await connectDb();

    return db.select().from(items).where(eq(items.id, id));
}

export const addItem = async (newItem: NewItemModel) =>{
    const db = await connectDb();

    await db.insert(items).values(newItem);
}

export const deleteItem = async (id: UUID) =>{
    const db = await connectDb();

    return db.delete(items).where(eq(items.id, id)).returning();
}