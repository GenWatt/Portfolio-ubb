import { Grid, Typography, useTheme } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import useTranslation from '../../shared/hooks/useTranslation';
import EmailIcon from '@mui/icons-material/Email';
import { useTrail, animated } from '@react-spring/web';

function Contact() {
    const theme = useTheme()
    const { t } = useTranslation()

    const contacts = [
        { href: "tel:+48784456947", icon: <PhoneIcon color={'primary'} />, text: "+48 784 456 947" },
        { href: "https://www.linkedin.com/in/adrian-raszka-front-end/", icon: <LinkedInIcon color={'primary'} />, text: <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}><img style={{ width: theme.spacing(4) }} src="https://www.worldometers.info//img/flags/small/tn_pl-flag.gif" /> {t('authorName')}</div> },
        { href: "mailto:adrian.kosoglos@gmail.com", icon: <EmailIcon color={'primary'} />, text: "adrian.kosoglos@gmail.com" },
    ];

    const trail = useTrail(contacts.length, {
        from: { opacity: 0, transform: 'translate3d(-40px,0,0)' },
        to: { opacity: 1, transform: 'translate3d(0px,0,0)' },
        delay: () => 200
    });

    const linkStyles = {
        color: 'inherit',
        textDecoration: 'none',
        display: 'flex',
        gap: theme.spacing(1),
        alignItems: "center"
    }

    return (
        <div>
            <Typography variant="h6" gutterBottom>{t('contact')}</Typography>
            <Grid container gap={2}>
                {trail.map((props, index) => (
                    <animated.div style={props} key={index}>
                        <Grid item>
                            <a href={contacts[index].href} target='blank' style={linkStyles}>
                                {contacts[index].icon}
                                <Typography variant="subtitle1">{contacts[index].text}</Typography>
                            </a>
                        </Grid>
                    </animated.div>
                ))}
            </Grid>
        </div>
    )
}

export default Contact