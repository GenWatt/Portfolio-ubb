import { styled } from "@mui/material";

interface DrawerHeaderProps {
    paddingTop?: string;
    paddingBottom?: string;
}

const DrawerHeader = styled('div')<DrawerHeaderProps>(({ paddingTop, paddingBottom }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom,
    paddingTop,
}));

export default DrawerHeader;
