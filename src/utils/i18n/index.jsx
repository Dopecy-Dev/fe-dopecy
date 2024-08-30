import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en'
import es from './es'
import fr from './fr'
import de from './de'
import th from './th'
import hi from './hi'
import el from './el'
import pt from './pt'
import ar from './ar'
import uk from './uk'
import pl from './pl'

const resources = {
    en: { translation: en },
    es: { translation: es },
    fr: { translation: fr },
    de: { translation: de },
    th: { translation: th },
    hi: { translation: hi },
    el: { translation: el },
    pt: { translation: pt },
    uk: { translation: uk },
    pl: { translation: pl },
    ar: { translation: ar }
};

// Function to get the language from local storage or fallback to default
const getInitialLanguage = () => {
    console.log(localStorage.getItem('lang'), "localStorage.getItem('lang')")
    const storedLanguage = localStorage.getItem('lang');
    return storedLanguage || 'en'; // Fallback to 'en' if no language is stored
};

// Initialize i18n
i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: getInitialLanguage(), // Set the initial language
        fallbackLng: 'en',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
            wait: true,
        },
    });

export default i18n;
