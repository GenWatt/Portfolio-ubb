import { ListItem, Tooltip, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material'
import { TranslationKeys } from '../../../languages'
import { NavLink, useLocation } from 'react-router-dom'
import useTranslation from '../../../hooks/useTranslation'
import { Settings } from '@mui/icons-material'
import { animated, useSpring } from 'react-spring'

export interface NavLinkProps {
    route: { path: string, text: string, icon: JSX.Element, inProgress?: boolean }
    isMobile: boolean
    open: boolean
    handleDrawerClose: () => void
}

function NavLinkDrawer({ route, isMobile, open, handleDrawerClose }: NavLinkProps) {
    const { path, text, icon, inProgress } = route
    const loaction = useLocation()
    const theme = useTheme()
    const { t } = useTranslation()
    const activeColor = (path: string) => loaction.pathname === path ? theme.palette.primary.light : theme.palette.primary.dark;

    const tooltipText = inProgress ? `${t(text as TranslationKeys)} (${t('inProgress')})` : t(text as TranslationKeys)

    const rotation = useSpring({
        loop: true,
        to: { transform: 'rotate(360deg)' },
        from: { transform: 'rotate(0deg)' },
        config: { duration: 2000 },
    });

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
                    {inProgress && <ListItemIcon
                        sx={{
                            color: activeColor(path),
                            fontSize: theme.typography.subtitle2.fontSize
                        }}
                    >
                        <animated.div style={{ ...rotation, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Settings fontSize='inherit' />
                        </animated.div>
                    </ListItemIcon>}
                </ListItemButton> : <Tooltip placement='right' title={tooltipText}>
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
                        {inProgress && <ListItemIcon
                            sx={{
                                position: 'absolute',
                                left: '115%',
                                top: 2,
                                color: activeColor(path),
                                transform: 'translateX(-50%)',
                                fontSize: theme.typography.subtitle2.fontSize
                            }}
                        >
                            <animated.div style={{ ...rotation, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Settings fontSize='inherit' />
                            </animated.div>
                        </ListItemIcon>
                        }
                    </ListItemButton>
                </Tooltip>}
            </ListItem>
        </NavLink>
    )
}

export default NavLinkDrawer