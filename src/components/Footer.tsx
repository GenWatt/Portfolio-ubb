import styled from '@mui/material/styles/styled';
import { Container, Typography, useTheme } from "@mui/material";

import useTranslation from '../hooks/useTranslation';

const StyledFooter = styled('footer')(({ theme }) => ({
    padding: theme.spacing(0.5, 0, 0.5, 0),
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: theme.palette.background.default,
    borderColor: theme.palette.divider,
    borderTopWidth: 1,
    borderTopStyle: 'solid',
}));

function Footer() {
    const year = new Date().getFullYear();
    const { t } = useTranslation()
    const theme = useTheme()

    return (
        <StyledFooter id="Footer">
            <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
                <Typography component={'span'} variant="caption">
                    &copy; {year} {t('createdBy')}
                </Typography>
                <a href='https://www.linkedin.com/in/adrian-raszka-front-end/' target='blank'>
                    <Typography component="strong" color={theme.palette.primary.main} variant="caption">
                        {' ' + t('author')}
                    </Typography>
                </a>
            </Container>
        </StyledFooter>
    )
}

export default Footer