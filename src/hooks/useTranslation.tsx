import { useLanguage } from '../context/LanguageContext'
import { dictionary } from '../languages'
import { TranslationKeys } from '../languages'

function useTranslation() {
    const lang = useLanguage()

    function wordsToCamelCase(words: string) {
        let result = words.replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
        return result.charAt(0).toLowerCase() + result.slice(1);
    }
    function t(key: TranslationKeys) {
        const camelCaseKey = wordsToCamelCase(key)
        //@ts-ignore
        return dictionary[lang.language.langCode][camelCaseKey] || key
    }

    return { t }
}

export default useTranslation