import { ListItem, Tooltip, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material'
import { TranslationKeys } from '../../languages'
import { NavLink, useLocation } from 'react-router-dom'
import useTranslation from '../../hooks/useTranslation'

export interface NavLinkProps {
    route: { path: string, text: string, icon: JSX.Element }
    isMobile: boolean
    open: boolean
    handleDrawerClose: () => void
}

function NavLinkDrawer({ route, isMobile, open, handleDrawerClose }: NavLinkProps) {
    const { path, text, icon } = route
    const loaction = useLocation()
    const theme = useTheme()
    const { t } = useTranslation()
    const activeColor = (path: string) => loaction.pathname === path ? theme.palette.primary.light : theme.palette.primary.dark;

    return (
        <NavLink to={path} key={text} style={{ textDecoration: 'none', color: activeColor(path) }}>
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                {open ? <ListItemButton
                    sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                        backgroundColor: loaction.pathname === path ? theme.palette.primary.dark : 'transparent'
                    }}
                    onClick={isMobile ? handleDrawerClose : undefined}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                            color: activeColor(path),
                        }}
                    >
                        {icon}
                    </ListItemIcon>
                    <ListItemText primary={t(text as TranslationKeys)} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton> : <Tooltip placement='right' title={t(text as TranslationKeys)}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                            backgroundColor: loaction.pathname === path ? theme.palette.primary.dark : 'transparent'
                        }}
                        onClick={isMobile ? handleDrawerClose : undefined}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                                color: activeColor(path)
                            }}
                        >
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={t(text as TranslationKeys)} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </Tooltip>}
            </ListItem>
        </NavLink>
    )
}

export default NavLinkDrawer