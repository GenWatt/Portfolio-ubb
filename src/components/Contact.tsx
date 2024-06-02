import { Grid, Typography, useTheme } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import useTranslation from '../hooks/useTranslation';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
    const theme = useTheme()
    const { t } = useTranslation()

    const linkStyles = {
        color: 'inherit',
        textDecoration: 'none',
        display: 'flex',
        gap: theme.spacing(2),
        alignItems: "center"
    }

    return (
        <div>
            <Typography variant="h6" gutterBottom>{t('contact')}</Typography>
            <Grid container gap={2}>
                <Grid item>
                    <a href="tel:+48784456947" style={linkStyles}>
                        <PhoneIcon color={'primary'} />
                        <img className="flag" src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/1920px-Flag_of_Poland.svg.png" alt="Polish flag" />
                        <Typography variant="subtitle1">+48 784 456 947</Typography>
                    </a>
                </Grid>
                <Grid item>
                    <a href="https://www.linkedin.com/in/adrian-raszka-front-end/" target='blank' style={linkStyles}>
                        <LinkedInIcon color={'primary'} />
                        <Typography variant="subtitle1">Adrian Raszka</Typography>
                    </a>
                </Grid>
                <Grid item>
                    <a href="mailto:adrian.kosoglos@gmail.com" target='blank' style={linkStyles}>
                        <EmailIcon color={'primary'} />
                        <Typography variant="subtitle1">adrian.kosoglos@gmail.com</Typography>
                    </a>
                </Grid>
            </Grid>
        </div>
    )
}

export default Contact