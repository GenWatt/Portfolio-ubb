import { useTheme } from "@mui/material"
import { useCallback, useLayoutEffect, useState } from "react"
import { useDrawerStore } from "../../sidenav/stores/drawerStore";

function useHelper() {
    const theme = useTheme()
    const [isMobile, setIsMobile] = useState(window.innerWidth < theme.breakpoints.values.sm)
    const { isOpen } = useDrawerStore();
    const [viewWidth, setViewWidth] = useState(0);
    const [viewHeight, setViewHeight] = useState(0);

    function getViewHeight() {
        const appBarEl = document.getElementById('AppBar')
        const footerEl = document.getElementById('Footer')
        const mainEl = document.getElementsByTagName('main')[0]
        const appBarHeight = appBarEl ? appBarEl.clientHeight : 0
        const footerHeight = footerEl ? footerEl.clientHeight : 0
        const mainPaddingY = mainEl ? parseInt(window.getComputedStyle(mainEl).paddingTop) + parseInt(window.getComputedStyle(mainEl).paddingBottom) : 0

        return window.innerHeight - appBarHeight - footerHeight - mainPaddingY
    }

    function getViewWidth() {
        const drawerEl = document.getElementById('Drawer')
        const mainEl = document.getElementsByTagName('main')[0]
        const drawerWidth = drawerEl && !isMobile ? drawerEl.clientWidth : 0
        const mainPaddingX = mainEl ? parseInt(window.getComputedStyle(mainEl).paddingLeft) + parseInt(window.getComputedStyle(mainEl).paddingRight) : 0

        return window.innerWidth - drawerWidth - mainPaddingX
    }

    const handleResize = useCallback(() => {
        setIsMobile(window.innerWidth < theme.breakpoints.values.sm)
        setViewWidth(getViewWidth());
        setViewHeight(getViewHeight());
    }, [getViewWidth, theme.breakpoints.values.sm]);

    useLayoutEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const animationDuration = isOpen
            ? theme.transitions.duration.enteringScreen
            : theme.transitions.duration.leavingScreen;

        timeoutId = setTimeout(() => {
            handleResize();
        }, animationDuration);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [isOpen, handleResize, theme.transitions.duration]);

    useLayoutEffect(() => {
        handleResize();
        const debouncedResize = debounce(handleResize, 10);

        window.addEventListener('resize', debouncedResize);
        return () => {
            window.removeEventListener('resize', debouncedResize);
            debouncedResize.cancel();
        };
    }, [handleResize]);

    function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
        let timeoutId: NodeJS.Timeout | null = null;

        const debounced = (...args: Parameters<T>) => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => func(...args), wait);
        };

        debounced.cancel = () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };

        return debounced;
    }

    return { getViewHeight, getViewWidth, isMobile, viewWidth, viewHeight }
}

export default useHelper