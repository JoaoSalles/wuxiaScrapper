import { useState, useEffect } from 'react';

interface SideBarState {
    open: boolean;
    onHamburgerClick: React.Dispatch<React.SetStateAction<void>>;
    isMobile: boolean;
}
const checkIsMobile = (): boolean => {
    return window.innerWidth < 700;
}

const useSideBar = (): SideBarState => {
    const [open, setOpen] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(checkIsMobile());

    const onHamburgerClick = (): void => {
        setOpen(!open)
    }

    useEffect(() => {
        function handleResize() {
            setIsMobile(checkIsMobile());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount


    return {
        open,
        isMobile,
        onHamburgerClick
    }
}

export default useSideBar;