import React, { createContext, useMemo, useState } from 'react';

interface LayoutContextState {
    open: boolean;
    sidebarWidth: number;
    openSidebarHandler: () => void;
    closeSidebarHandler: () => void;
}

const LayoutContext = createContext<LayoutContextState>({
    open: false,
    sidebarWidth: 200,
    openSidebarHandler: () => {},
    closeSidebarHandler: () => {},
});

export const LayoutProvider: React.FC<{ children: React.ReactNode; sidebarWidth?: number }> = ({
    children,
    sidebarWidth = 200,
}) => {
    const [open, setOpen] = useState(false);

    const openSidebarHandler = () => setOpen(true);

    const closeSidebarHandler = () => setOpen(false);

    const value: LayoutContextState = useMemo(
        () => ({
            open,
            sidebarWidth,
            openSidebarHandler,
            closeSidebarHandler,
        }),
        [open],
    );

    return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
};

export default LayoutContext;
