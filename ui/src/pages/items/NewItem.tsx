import { useForm } from "react-hook-form";
import { Button, Grid, FormControl } from "@mui/material";
import MainLayout from "@/layouts/MainLayout";
import TextField from "@/components/formInputs/TextField";
import Select from "@/components/formInputs/Select";
import Checkbox from "@/components/formInputs/Checkbox";
import TextArea from "@/components/formInputs/TextArea";
import { ItemRarity, ItemType } from "@/custom-types";

interface NewItemFormData {
    name: string
    type: ItemType
    rarity: ItemRarity
    attunement: Boolean
    tags: String[]
    charges: Number | null
    description: String
}


const typeOptions = (Object.keys(ItemType) as Array<keyof typeof ItemType>).map((key) => {
    return {
        value: key, 
        label: ItemType[key]
    }
})

const rarityOptions = (Object.keys(ItemRarity) as Array<keyof typeof ItemRarity>).map((key) => {
    return {
        value: key, 
        label: ItemRarity[key]
    }
})

function NewItem() {
    const { handleSubmit, control } = useForm<NewItemFormData>({
        defaultValues: {
            name: "",
            type: ItemType.NONE,
            rarity: ItemRarity.NONE,
            attunement: false,
            tags: [],
            charges: null,
            description: ""
        }
    });

    const saveNewItem = (data: NewItemFormData) => console.log(data)

    return (
        <MainLayout>
            <h1>New Item</h1>
            <form>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <TextField name={"name"} control={control} label={"Item name"} />
                        </FormControl>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <Select name={"type"} control={control} label={"Item type"} options={typeOptions} value={ItemType.NONE} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <Select name={"rarity"} control={control} label={"Item rarity"} options={rarityOptions} value={ItemRarity.NONE} />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Checkbox name={"attunement"} control={control} label={"Attunement"} />
                    </Grid>

                    <Grid item xs={12}>
                        
                        <FormControl fullWidth>
                            <TextArea name={"description"} control={control} label={"Description"} rows={4} />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <Button onClick={handleSubmit(saveNewItem)} variant="contained">Submit</Button>
                    </Grid>
                </Grid>
            </form>
        </MainLayout>
    )
}

export default NewItem