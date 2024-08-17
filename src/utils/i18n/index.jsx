import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';
import esp from './esp';

const resources = {
    en: { translation: en },
    esp: { translation: esp },
};

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: false,
        resources,
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
            wait: true,
        },
    });

export default i18n;
