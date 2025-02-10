import { ListItemButton, ListItemIcon, styled } from '@mui/material'

const StyledListItemButton = styled(ListItemButton, {
    shouldForwardProp: (prop) => prop !== 'open' && prop !== 'active'
})<{ open: boolean; active: boolean }>(({ theme, open, active }) => ({
    minHeight: 48,
    justifyContent: open ? 'initial' : 'center',
    paddingLeft: theme.spacing(2.5),
    paddingRight: theme.spacing(2.5),
    backgroundColor: active ? theme.palette.primary.dark : 'transparent',
}));

const StyledListItemIcon = styled(ListItemIcon, {
    shouldForwardProp: (prop) => prop !== 'open' && prop !== 'activeColor' && prop !== 'path'
})<{ open: boolean; activeColor: (path: string) => string; path: string }>(({ theme, open, activeColor, path }) => ({
    minWidth: 0,
    marginRight: open ? theme.spacing(3) : 'auto',
    justifyContent: 'center',
    color: activeColor(path),
}));

const InProgressIcon = styled(ListItemIcon, {
    shouldForwardProp: (prop) => prop !== 'activeColor',
})<{ activeColor: string }>(({ theme, activeColor }) => ({
    position: 'absolute',
    left: '115%',
    top: theme.spacing(0.25),
    color: activeColor,
    transform: 'translateX(-50%)',
    fontSize: theme.typography.subtitle2.fontSize,
}));


export { StyledListItemButton, StyledListItemIcon, InProgressIcon };