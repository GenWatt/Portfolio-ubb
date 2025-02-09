import { useTheme, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Router from '../../Router';

import { Backdrop, Grid, SelectChangeEvent, Tooltip } from '@mui/material';
import Footer from '../../Footer';
import { useLanguage } from '../../../context/LanguageContext';
import useTranslation from '../../../hooks/useTranslation';
import { TranslationKeys } from '../../../languages';
import NavLinkDrawer from './NavLinkDrawer';
import UserPreferences from './UserPreferences';
import { useEffect, useState } from 'react';
import useHelper from '../../../hooks/useHelper';
import { notShowOnMobile } from '../../../routes/routes';
import AppBar from '../styles/Appbar';
import DrawerHeader from '../styles/DrawerHeader';
import Drawer from '../styles/Drawer';

export interface SideNavProps {
    handleThemeChange: (event: SelectChangeEvent) => void;
    currentTheme: string;
    themes: { label: string, name: string, theme: Theme }[];
    navRoutes: { text: string, path: string, icon: JSX.Element, inPrgress?: boolean }[];
}

export default function SideNav({ handleThemeChange, currentTheme, themes, navRoutes }: SideNavProps) {
    const theme = useTheme();
    const { language } = useLanguage();
    const { t } = useTranslation();
    const { isMobile } = useHelper();

    const [open, setOpen] = useState(false);
    // const [isMobile, setIsMobile] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [paddintTop, setPaddingTop] = useState(0);
    const [paddintTop2, setPaddingTop2] = useState(0);

    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false);

    const activeText = (path: string) => {
        let text = '';
        navRoutes.forEach(route => {
            if (route.path === path) {
                text = route.text;
            }
        });

        return t(text as TranslationKeys);
    }

    const handleResize = () => {
        const appBarEl = document.getElementById('AppBar');
        const closeButton = document.getElementById('CloseButton');
        const closeButtonHeight = closeButton ? closeButton.clientHeight : 0;
        const appBarHeight = appBarEl ? appBarEl.clientHeight : 0;

        setPaddingTop(appBarHeight - closeButtonHeight);
        setPaddingTop2(appBarHeight);
    }

    useEffect(() => {
        if (isMobile && open) {
            setIsMobileOpen(true);
        } else {
            setIsMobileOpen(false);
        }
    }, [isMobile, open])

    useEffect(() => {
        const timer = setTimeout(() => {
            handleResize();
        }, theme.transitions.duration.enteringScreen);

        return () => clearTimeout(timer);
    }, [open])

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    const renderLinks = navRoutes.filter(({ path }) => notShowOnMobile.includes(path) ? !isMobile : true);

    return (
        <Box component='div' sx={{ display: 'flex' }}>
            <CssBaseline />

            <AppBar id='AppBar' position="fixed" open={open} dir={language.langDirection}>
                <Toolbar sx={{ width: '100%', p: 1 }}>
                    <Tooltip title={t('openDrawer')} placement='right'>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                [language.langDirection === 'rtl' ? 'marginLeft' : 'marginRight']: 5,
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Tooltip>
                    <Grid container alignItems={'center'} justifyContent={'space-between'}>
                        <Typography color={theme.palette.mode === 'light' ? theme.palette.text.secondary : theme.palette.primary.main} variant="h5" noWrap component="div">
                            {activeText(location.pathname)}
                        </Typography>
                        {!isMobile && !open && <UserPreferences onFontSizeChange={handleResize} currentTheme={currentTheme} handleThemeChange={handleThemeChange} themes={themes} />}
                    </Grid>
                </Toolbar>
            </AppBar>

            <Drawer id="Drawer" dir={language.langDirection} variant="permanent" open={open} anchor={language.langDirection === 'rtl' ? 'right' : 'left'}>
                <DrawerHeader paddingTop={`${paddintTop / 2}px`} paddingBottom={`${paddintTop / 2}px`}>
                    <Tooltip title={t('closeDrawer')} placement='right'>
                        <IconButton id="CloseButton" onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </Tooltip>
                </DrawerHeader>

                <Divider />
                <List sx={{ padding: 0 }}>
                    {renderLinks.map((route) => (
                        <NavLinkDrawer route={route} key={route.text} isMobile={isMobile} handleDrawerClose={handleDrawerClose} open={open} />
                    ))}
                    {isMobileOpen && <Divider />}
                    {open && <UserPreferences padding={1} flexDirection={'column'} currentTheme={currentTheme} handleThemeChange={handleThemeChange} themes={themes} />}
                </List>
            </Drawer>

            {isMobileOpen && <Backdrop open={open} onClick={handleDrawerClose} />}
            <Box component="main" sx={{ flexGrow: 1, pointerEvents: isMobileOpen ? 'none' : 'auto', paddingBottom: 5, p: 2 }}>
                <DrawerHeader paddingTop={`${paddintTop2}px`} />
                <Router />
                <Footer />
            </Box>
        </Box>
    );
}