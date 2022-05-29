import { Box, Divider, Drawer, IconButton } from '@mui/material';
import { ChevronLeft } from '@mui/icons-material';
import styled from '@emotion/styled';
import { useContext } from 'react';
import LayoutContext from '../../context/LayoutContext';

interface SidebarProps {
    content?: React.ReactNode[];
}

const DrawerHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 12px 5px;
`;

const Sidebar: React.FC<SidebarProps> = ({ content }) => {
    const { open, closeSidebarHandler, sidebarWidth } = useContext(LayoutContext);

    const sidebarContent = content?.map((item) => (
        <>
            <Box sx={{ padding: '10px 20px' }}>{item}</Box>
            <Divider />
        </>
    ));

    return (
        <Drawer variant="persistent" anchor="left" open={open}>
            <Box sx={{ width: sidebarWidth }}>
                <DrawerHeader>
                    <IconButton onClick={closeSidebarHandler}>
                        <ChevronLeft />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                {sidebarContent}
            </Box>
        </Drawer>
    );
};

export default Sidebar;
