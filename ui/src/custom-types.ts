export type ObjectId = string

export enum ItemType {
    ARMOR = "Armor", 
    POTION = "Potion", 
    RING = "Ring", 
    ROD = "Rod", 
    SCROLL = "Scroll", 
    STAFF = "Staff", 
    WAND = "Wand", 
    WEAPON = "Weapon", 
    WONDROUS = "Wonderous Item",
    NONE = ""
}

export enum ItemRarity {
    COMMON = "Common",
    UNCOMMON = "Uncommon",
    RARE = "Rare",
    VERYRARE = "Very rare",
    LEGENDARY = "Legendary",
    ARTEFACT = "Artefact",
    VARIES = "Varies",
    NONE = ""
}