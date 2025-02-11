import { Settings } from '@mui/icons-material'
import { Tooltip } from '@mui/material'
import { animated } from '@react-spring/web'
import useDrawerLink from '../hooks/useDrawerLink'
import useHelper from '../../shared/hooks/useHelper'
import useTranslation from '../../shared/hooks/useTranslation'
import { TranslationKeys } from '../../../languages'
import { StyledListItemButton, StyledListItemIcon } from '../styles/CloseNavLinkDrawerStyles'
import { InProgressIcon } from '../styles/OpenNavLinkDrawerStyles'

export interface CloseNavLinkDrawerProps {
    route: { path: string, text: string, icon: JSX.Element, inProgress?: boolean }
    open: boolean
    handleDrawerClose: () => void
}

function CloseNavLinkDrawer({ route, open, handleDrawerClose }: CloseNavLinkDrawerProps) {
    const { activeColor, location, rotation } = useDrawerLink()
    const { path, text, icon, inProgress } = route
    const { isMobile } = useHelper()
    const { t } = useTranslation()

    const tooltipText = inProgress ? `${t(text as TranslationKeys)} (${t('inProgress')})` : t(text as TranslationKeys)

    return (
        <Tooltip placement='right' title={tooltipText}>
            <StyledListItemButton
                open={open}
                active={location.pathname === path}
                onClick={isMobile ? handleDrawerClose : undefined}
            >
                <StyledListItemIcon
                    open={open}
                    activeColor={activeColor}
                    path={path}
                >
                    {icon}
                </StyledListItemIcon>
                {inProgress && <InProgressIcon
                    activeColor={activeColor(path)}
                >
                    <animated.div style={{ ...rotation, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Settings fontSize='inherit' />
                    </animated.div>
                </InProgressIcon>
                }
            </StyledListItemButton>
        </Tooltip>
    )
}

export default CloseNavLinkDrawer