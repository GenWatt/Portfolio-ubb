import { ListItem } from '@mui/material'
import { NavLink } from 'react-router-dom'
import OpenLinkDrawer from './OpenLinkDrawer'
import CloseNavLinkDrawer from './CloseNavLinkDrawer'
import useDrawerLink from '../hooks/useDrawerLink'

export interface NavLinkProps {
    route: { path: string, text: string, icon: JSX.Element, inProgress?: boolean }
    open: boolean
    handleDrawerClose: () => void
}

function NavLinkDrawer({ route, open, handleDrawerClose }: NavLinkProps) {
    const { path, text } = route
    const { activeColor } = useDrawerLink()

    return (
        <NavLink to={path} key={text} style={{ textDecoration: 'none', color: activeColor(path) }}>
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                {open
                    ? <OpenLinkDrawer open={open} handleDrawerClose={handleDrawerClose} route={route} />
                    : <CloseNavLinkDrawer open={open} handleDrawerClose={handleDrawerClose} route={route} />}
            </ListItem>
        </NavLink>
    )
}

export default NavLinkDrawer