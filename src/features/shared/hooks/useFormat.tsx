import { useLanguage } from "../../../context/LanguageContext";

function useFormat() {
    const { language } = useLanguage()

    function formatDate(date: string): string {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        // @ts-ignore
        return new Date(date).toLocaleDateString(language.langISO, options);
    }

    return { formatDate }
}

export default useFormat