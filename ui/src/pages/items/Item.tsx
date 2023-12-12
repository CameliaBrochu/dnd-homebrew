import { useParams } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout';
import { Divider } from "@mui/material";
import { ItemRarity, ItemType } from "@/custom-types";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface ItemData {
    name: string
    type: ItemType
    rarity: ItemRarity
    attunement: Boolean
    tags: String[]
    charges: Number | null
    description: String
}

const Item = () => {

    const { id } = useParams();

    const item: ItemData = {
        name: "Item 1",
        type: ItemType.ARMOR,
        rarity: ItemRarity.UNCOMMON,
        attunement: true,
        tags: [],
        charges: null,
        description: "Lempiondum erfaerec viulimpe quecltat aecoltequtic pulesus odasi. Rsta dumo ctus riodulinp healch, vima meatisctibric iagevi ediuebatis laes amalae crnuat? Nanorerst ctihim cume esust paniga pontatavaco amogopur donitirogem. Ngumi aitemitir escrront hullt fususim duscuss cluinto tamict. Remonq rope ergo fumext."
    }


    return (
        <MainLayout>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h2">{item.name}</Typography>
                    <Divider />
                    <Typography variant="subtitle2">{item.type}, {item.rarity}</Typography>
                    <Divider />
                    <Typography variant="body1">
                        {item.description}
                        { (item.charges) ? "Number of charges : " + item.charges : ""}
                    </Typography>
                </CardContent>
            </Card>
            
        </MainLayout>
    )
}

export default Item;