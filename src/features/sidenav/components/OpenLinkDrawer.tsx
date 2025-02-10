import { Settings } from '@mui/icons-material';
import { ListItemText as MuiListItemText } from '@mui/material';
import { animated } from 'react-spring';
import { TranslationKeys } from '../../../languages';
import useHelper from '../../../hooks/useHelper';
import useTranslation from '../../../hooks/useTranslation';
import { useLocation } from 'react-router-dom';
import useDrawerLink from '../hooks/useDrawerLink';
import { InProgressIcon, ListItemButton, ListItemIcon } from '../styles/OpenNavLinkDrawerStyles';

export interface OpenLinkDrawerProps {
    route: { path: string, text: string, icon: JSX.Element, inProgress?: boolean };
    open: boolean;
    handleDrawerClose: () => void;
}

function OpenLinkDrawer({ route, open, handleDrawerClose }: OpenLinkDrawerProps) {
    const { path, text, icon, inProgress } = route;
    const { isMobile } = useHelper();
    const { t } = useTranslation();
    const location = useLocation();
    const { activeColor, rotation } = useDrawerLink();

    return (
        <ListItemButton
            open={open}
            active={location.pathname === path}
            onClick={isMobile ? handleDrawerClose : undefined}
        >
            <ListItemIcon open={open} activeColor={activeColor} path={path}>
                {icon}
            </ListItemIcon>

            <MuiListItemText primary={t(text as TranslationKeys)} sx={{ opacity: open ? 1 : 0 }} />
            {inProgress && (
                <InProgressIcon activeColor={activeColor(path)}>
                    <animated.div style={{ ...rotation, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Settings fontSize='inherit' />
                    </animated.div>
                </InProgressIcon>
            )}
        </ListItemButton>
    );
}

export default OpenLinkDrawer;