import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import MainLayout from "@/layouts/MainLayout";
import TextField from "@/components/formInputs/TextField";
import Select from "@/components/formInputs/Select";

enum ItemType  {
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
type ItemRarity = "COMMON" | "UNCOMMON" | "RARE" | "VERY RARE" | "LEGENDARY" | "ARTEFACT" | "VARIES"

interface NewItemFormData {
    name: string
    type: ItemType
    rarity: ItemRarity
    attunement: Boolean
    tags: String[]
    charges: Number | null
    description: String
}


function NewItem() {
    const { handleSubmit, control } = useForm<NewItemFormData>({
        defaultValues: {
            name: "",
            type: ItemType.NONE,
            rarity: undefined,
            attunement: undefined,
            tags: [],
            charges: null,
            description: ""
        }
    });

    const options = (Object.keys(ItemType) as Array<keyof typeof ItemType>).map((key) => {
        return {
            value: key, 
            label: ItemType[key]
        }
    })

    const saveNewItem = (data: NewItemFormData) => console.log(data)

    return (
        <MainLayout>
            <form>
                <TextField name={"name"} control={control} label={"Item name"} />
                <Select name={"type"} control={control} label={"Item type"} options={options} value={ItemType.NONE} />
                <Button onClick={handleSubmit(saveNewItem)}>Submit</Button>
            </form>
        </MainLayout>
    )
}

export default NewItem