import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import MainLayout from "@/layouts/MainLayout";
import TextField from "@/components/formInputs/TextField";

interface NewItemFormData {
    name: string
}

function NewItem() {
    const { handleSubmit, control } = useForm({
        defaultValues: {
            name: ""
        }
    });

    const saveNewItem = (data: NewItemFormData) => console.log(data)

    return (
        <MainLayout>
            <form>
                <TextField name={"name"} control={control} label={"Item name"} />
                <Button onClick={handleSubmit(saveNewItem)}>Submit</Button>
            </form>
        </MainLayout>
    )
}

export default NewItem