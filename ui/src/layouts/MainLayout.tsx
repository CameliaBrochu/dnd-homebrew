import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';

import { Link } from "react-router-dom";

interface MyProps {
    children?: React.ReactNode
} 

const drawerWidth = 240;

const MainLayout:React.FC<MyProps> = (props) => {
    return (
        <>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    Dashboard
                </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <MenuList>
                    <Link to={`/`}>
                        <MenuItem>Home</MenuItem>
                    </Link>
                    <Link to={`/adventures`}>
                        <MenuItem>Adventures</MenuItem>
                    </Link>
                    <Link to={`/monsters`}>
                        <MenuItem>Monsters</MenuItem>
                    </Link>
                    <Link to={`/items`}>
                        <MenuItem>Items</MenuItem>
                    </Link>
                </MenuList>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
                <Toolbar />
                {props.children}
            </Box>
        </Box>
            
        </>
    )
}

export default MainLayout;