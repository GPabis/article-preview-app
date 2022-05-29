import { Box } from '@mui/material';
import { useContext } from 'react';
import CategoryFilter from '../components/Sidebar/CategoryFilter';
import Header from '../components/Layout/Header';
import LayoutContext from '../context/LayoutContext';
import Main from '../components/Layout/Main';
import Sidebar from '../components/Sidebar/Sidebar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { sidebarWidth, open } = useContext(LayoutContext);

    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar content={[<CategoryFilter />]} />
            <Main sidebarWidth={sidebarWidth} open={open}>
                <Header />
                {children}
            </Main>
        </Box>
    );
};

export default Layout;
