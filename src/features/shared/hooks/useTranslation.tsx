import { useLanguage } from '../../../context/LanguageContext'
import { dictionary, OptionalTranslationKeys, RequiredTranslationKeys } from '../../../languages'

function useTranslation() {
    const lang = useLanguage()
    const defaultLang = 'us'

    function wordsToCamelCase(words: string) {
        let result = words.replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
        return result.charAt(0).toLowerCase() + result.slice(1);
    }

    function t(key: RequiredTranslationKeys | OptionalTranslationKeys) {
        const camelCaseKey = wordsToCamelCase(key)
        //@ts-ignore
        return dictionary[lang.language.langCode][camelCaseKey] || dictionary[defaultLang][camelCaseKey] || key
    }

    return { t }
}

export default useTranslation