import { pgTable, uuid, primaryKey, varchar, boolean, serial, text, integer } from "drizzle-orm/pg-core";

export const items = pgTable("items", {
    id: uuid("id").primaryKey(),
    name: varchar("name", {length: 255}),
    type: integer("type"),
    rarity: integer("rarity"),
    attunement: boolean("attunement"),
    charges: integer("charges"),
    description: text("description")
})