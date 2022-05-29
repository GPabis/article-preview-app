import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import LayoutContext from '../../context/LayoutContext';

const Header: React.FC = () => {
    const { open, openSidebarHandler } = useContext(LayoutContext);

    const menuIcon = open || (
        <IconButton onClick={openSidebarHandler}>
            <MenuIcon sx={{ fontSize: '30px', color: '#ffffff' }} />
        </IconButton>
    );

    return (
        <AppBar position="static">
            <Toolbar>
                {menuIcon}
                <Typography variant="h6" component="div" sx={{ marginLeft: '20px' }}>
                    Articles Preview App
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
