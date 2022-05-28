import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';

const MenuIconStyled = styled(MenuIcon)`
    font-size: 35px;
    color: white;
`;
const Header: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton>
                    <MenuIconStyled />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ marginLeft: '20px' }}>
                    Articles Preview App
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
