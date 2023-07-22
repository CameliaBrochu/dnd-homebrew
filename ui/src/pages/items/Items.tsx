import MainLayout from "@/layouts/MainLayout";
import { DataGrid, GridEventListener, GridColDef } from '@mui/x-data-grid';
import { ItemRarity, ItemType, ObjectId } from "@/custom-types";
import { useNavigate } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

interface ItemListing {
  id: ObjectId
  name: string
  type: ItemType
  rarity: ItemRarity
  attunement: Boolean
  tags: String[]
}


const Items = () => {
  const navigate = useNavigate()

  const itemListing: ItemListing[] = [
    {
      id: "1",
      name: "Item 1",
      type: ItemType.WEAPON,
      rarity: ItemRarity.UNCOMMON,
      attunement: true,
      tags: [],
    },
    {
      
      id: "2",
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
  
  const onRowClick: GridEventListener<"rowClick"> = (rowData) => {
    navigate(`/items/${rowData.id}`)
  }

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
          <DataGrid rows={itemListing} columns={columns} onRowClick={onRowClick} />
        </Grid>
      </Grid>
      

      
    </MainLayout>
  );
}

export default Items;