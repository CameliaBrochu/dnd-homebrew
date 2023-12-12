import MainLayout from "@/layouts/MainLayout";
import { useForm } from "react-hook-form";
import { DataGrid, GridEventListener, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { ItemRarity, ItemType, ObjectId } from "@/custom-types";
import { useNavigate } from "react-router-dom";
import { Button, Grid, FormControl } from "@mui/material";
import TextField from "@/components/formInputs/TextField";
import Select from "@/components/formInputs/Select";
import Checkbox from "@/components/formInputs/Checkbox";
import { Link } from "react-router-dom";

interface ItemListing {
  id: ObjectId
  name: string
  type: ItemType
  rarity: ItemRarity
  attunement: Boolean
  tags: String[]
}

interface FilterFormData {
  name: string
  type: ItemType
  rarity: ItemRarity
  attunement: Boolean
}


const Items = () => {
  const navigate = useNavigate()
  const {handleSubmit, control} = useForm<FilterFormData>({
    defaultValues: {
        name: "",
        type: ItemType.NONE,
        rarity: ItemRarity.NONE,
        attunement: false
    }
  })

  const itemListing: ItemListing[] = [
    {
      id: "5",
      name: "Item 1",
      type: ItemType.WEAPON,
      rarity: ItemRarity.UNCOMMON,
      attunement: true,
      tags: [],
    },
    {
      
      id: "7",
      name: "Item 2",
      type: ItemType.POTION,
      rarity: ItemRarity.UNCOMMON,
      attunement: false,
      tags: [],
    },
  ] 

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 250 },
    { field: "type", headerName: "Type", width: 250 },
    { field: "rarity", headerName: "Rarity", width: 250 },
    { field: "attunement", headerName: "Attunement", width: 250 },
    { field: "tags", headerName: "", width: 250 },
  ];

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
  
  const onRowClick: GridEventListener<"rowClick"> = (rowData: GridRowParams<ItemListing>) => {
    navigate(`/items/${rowData.id}`)
  }

  const submitFilter = (data: FilterFormData) => console.log(data)

  return (
    <MainLayout>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Items</h1>

          <Link to={"new"}>
            <Button variant="contained">Add New</Button>
          </Link>
        </Grid>

        <Grid item xs={12}>
            <form>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                        <FormControl fullWidth>
                            <TextField name={"name"} control={control} label={"Item name"} />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <FormControl fullWidth>
                            <Select name={"type"} control={control} label={"Item type"} options={typeOptions} value={ItemType.NONE} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl fullWidth>
                            <Select name={"rarity"} control={control} label={"Item rarity"} options={rarityOptions} value={ItemRarity.NONE} />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Checkbox name={"attunement"} control={control} label={"Attunement"} />
                    </Grid>

                    <Grid item xs={12}>
                        <Button onClick={handleSubmit(submitFilter)} variant="contained">Filter</Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>

        <Grid item xs={12}>
          <DataGrid rows={itemListing} columns={columns} onRowClick={onRowClick} />
        </Grid>
      </Grid>
      

      
    </MainLayout>
  );
}

export default Items;