import React, { createContext, useState, useContext } from 'react';
import useLocalStorage from '../features/shared/hooks/useLocalStorage';
import { dictionary } from '../languages';

type LanguageContextType = {
    language: LanguageData;
    changeLanguage: (lang: string) => void;
    getSupportedLanguages: () => LanguageData[];
};

export type LanguageData = {
    langCode: string;
    langName: string;
    langDirection: string;
    langISO: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { getLocalStorage, setLocalStorage } = useLocalStorage();

    const savedLanguage = getLocalStorage('language');
    const languageText = (languageExists(savedLanguage) ? savedLanguage : 'us') as string;

    const [language, setLanguage] = useState<LanguageData>(getLangData(languageText));

    const changeLanguage = (lang: string) => {
        setLanguage(getLangData(lang));
        setLocalStorage('language', lang);
    }

    function getLangData(code: string) {
        return { langCode: dictionary[code].langCode, langName: dictionary[code].langName, langDirection: dictionary[code].langDirection, langISO: dictionary[code].langISO }
    }

    function languageExists(lang: string | null) {
        if (!lang) return null;
        return Object.keys(dictionary).includes(lang);
    }

    const getSupportedLanguages = () => {
        const langData: LanguageData[] = []
        const languages = Object.keys(dictionary);

        for (const lang of languages) {
            langData.push({
                langCode: dictionary[lang].langCode,
                langName: dictionary[lang].langName,
                langDirection: dictionary[lang].langDirection,
                langISO: dictionary[lang].langISO
            })
        }

        return langData;
    }

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, getSupportedLanguages }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};