import React from 'react';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import { useTranslation } from 'react-i18next';
import i18n from '../../utils/i18n';

function LandingPage() {
    const { t } = useTranslation();

    const changeLanguage = (lng) => {
        console.log('lng', lng)
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <Header />
            <div>
                <h1>{t('name')}</h1>
                <button onClick={() => changeLanguage('en')}>{t('age')}: English</button>
                <button onClick={() => changeLanguage('esp')}>{t('age')}: Español</button>
            </div>
            <Footer />
        </>
    );
}

export default LandingPage;
