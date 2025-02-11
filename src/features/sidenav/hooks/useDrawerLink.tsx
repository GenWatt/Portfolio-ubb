import { useSpring } from "@react-spring/web";
import { useLocation } from "react-router-dom";
import { useTheme } from "@mui/material";


function useDrawerLink() {
    const theme = useTheme();
    const location = useLocation();
    const activeColor = (path: string) => location.pathname === path ? theme.palette.primary.light : theme.palette.primary.dark;

    const rotation = useSpring({
        loop: true,
        to: { transform: 'rotate(360deg)' },
        from: { transform: 'rotate(0deg)' },
        config: { duration: 2000 },
    });

    return { activeColor, rotation, location, theme }
}

export default useDrawerLink