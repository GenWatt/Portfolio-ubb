import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Person2Icon from '@mui/icons-material/Person2';
import PhoneIcon from '@mui/icons-material/Phone';
import Router from './Router';
import HandymanIcon from '@mui/icons-material/Handyman';
import { Backdrop, Grid, SelectChangeEvent, Tooltip } from '@mui/material';
import Footer from './Footer';
import { useLanguage } from '../context/LanguageContext';
import useTranslation from '../hooks/useTranslation';
import { TranslationKeys } from '../languages';
import NavLinkDrawer from './sideNav/NavLinkDrawer';
import UserPreferences from './sideNav/UserPreferences';
import { useEffect, useState } from 'react';
import SchoolIcon from '@mui/icons-material/School';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import JavascriptIcon from '@mui/icons-material/Javascript';

const navRoutes = [
    { text: 'Profile', path: '/profile', icon: <Person2Icon /> },
    { text: 'Contact', path: '/contact', icon: <PhoneIcon /> },
    { text: 'Projects', path: '/projects', icon: <HandymanIcon /> },
    { text: 'Education', path: '/education', icon: <SchoolIcon /> },
    { text: 'Resume', path: '/resume', icon: <PictureAsPdfIcon /> },
    { text: 'TechStack', path: '/stack', icon: <JavascriptIcon /> }
]

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(1, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open, dir }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        [dir === 'rtl' ? 'marginRight' : 'marginLeft']: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
        [theme.breakpoints.down('sm')]: {
            '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: open ? drawerWidth : 0,
            },
            width: open ? drawerWidth : 0,
            position: 'absolute',
            zIndex: theme.zIndex.drawer + 1,
        },
    }),
);

export interface SideNavProps {
    handleThemeChange: (event: SelectChangeEvent) => void;
    currentTheme: string;
    themes: { label: string, name: string, theme: Theme }[];
}

export default function SideNav({ handleThemeChange, currentTheme, themes }: SideNavProps) {
    const theme = useTheme();
    const { language } = useLanguage();
    const { t } = useTranslation();

    const [open, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

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
        if (window.innerWidth < theme.breakpoints.values.sm) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

    useEffect(() => {
        if (isMobile && open) {
            setIsMobileOpen(true);
        } else {
            setIsMobileOpen(false);
        }
    }, [isMobile, open])

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <Box component='div' sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar id='AppBar' position="fixed" open={open} dir={language.langDirection}>
                <Toolbar sx={{ width: '100%', p: 1 }}>
                    {/* <Tooltip title={t('openDrawer')} placement='right'> */}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            [language.langDirection === 'rtl' ? 'marginLeft' : 'marginRight']: 5,
                            ...(open && { display: 'none' }),
                            minHeight: 72
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* </Tooltip> */}
                    <Grid container alignItems={'center'} justifyContent={'space-between'}>
                        <Typography color={theme.palette.mode === 'light' ? theme.palette.text.secondary : theme.palette.primary.main} variant="h5" noWrap component="div">
                            {activeText(location.pathname)}
                        </Typography>
                        {!isMobile && <UserPreferences currentTheme={currentTheme} handleThemeChange={handleThemeChange} themes={themes} />}
                    </Grid>
                </Toolbar>
            </AppBar>
            <Drawer id="Drawer" dir={language.langDirection} variant="permanent" open={open} anchor={language.langDirection === 'rtl' ? 'right' : 'left'}>
                <DrawerHeader>
                    <Tooltip title={t('closeDrawer')} placement='right'>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </Tooltip>
                </DrawerHeader>
                <Divider />
                <List sx={{ padding: 0 }}>
                    {navRoutes.map((route) => (
                        <NavLinkDrawer route={route} key={route.text} isMobile={isMobile} handleDrawerClose={handleDrawerClose} open={open} />
                    ))}
                    {isMobile && <Divider />}
                    {isMobile && <UserPreferences padding={1} flexDirection={'column'} currentTheme={currentTheme} handleThemeChange={handleThemeChange} themes={themes} />}
                </List>
            </Drawer>
            {isMobileOpen && <Backdrop open={open} onClick={handleDrawerClose} />}
            <Box component="main" sx={{ flexGrow: 1, pointerEvents: isMobileOpen ? 'none' : 'auto', paddingBottom: 5, p: 2 }}>
                <DrawerHeader />
                <Router />
                <Footer />
            </Box>
        </Box>
    );
}