import { Box, Select, MenuItem, useTheme, SelectChangeEvent, Theme, BoxProps } from '@mui/material'
import { TranslationKeys } from '../../languages'
import { useLanguage } from '../../context/LanguageContext'
import useTranslation from '../../hooks/useTranslation';


export interface UserPreferencesProps extends BoxProps {
    currentTheme: string;
    handleThemeChange: (event: SelectChangeEvent) => void;
    themes: { label: string, name: string, theme: Theme }[];
}

function UserPreferences({ currentTheme, handleThemeChange, themes, ...boxProps }: UserPreferencesProps) {
    const theme = useTheme()
    const { language, getSupportedLanguages, changeLanguage } = useLanguage()
    const { t } = useTranslation()

    const handleLanguageChange = (event: SelectChangeEvent) => {
        changeLanguage(event.target.value as string);
    }

    return (
        <Box display={'flex'} gap={1} {...boxProps}>
            <Select sx={{ backgroundColor: theme.palette.background.default }} value={currentTheme} onChange={handleThemeChange}>
                {themes.map(({ label, name, theme }) => (
                    <MenuItem key={name} value={name}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <div style={{ backgroundColor: theme.palette.primary.main, width: 20, height: 20, borderRadius: 10 }} />
                            {t(label as TranslationKeys)}
                        </Box>
                    </MenuItem>))}
            </Select>
            <Select sx={{ backgroundColor: theme.palette.background.default }} value={language.langCode} onChange={handleLanguageChange}>
                {getSupportedLanguages().map(lang => (
                    <MenuItem key={lang.langCode} value={lang.langCode}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <img src={`https://www.worldometers.info//img/flags/small/tn_${lang.langCode}-flag.gif`} alt={lang.langName} style={{ width: 20, height: 20 }} />
                            {lang.langName}
                        </Box>
                    </MenuItem>
                ))}
            </Select>
        </Box>
    )
}

export default UserPreferences