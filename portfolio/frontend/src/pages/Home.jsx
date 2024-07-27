import React from 'react';
import { useTranslation } from 'react-i18next';
import PP2024 from '../assets/images/pp-2024.png';

const Home = () => {
    const { t } = useTranslation();

    const handleButtonClick = (pageName) => {
        window.location.href = `/${pageName}/`;
    };

    return (
        <>
            <h1>{t('welcome')}</h1>
            <section id='presentation'>
                <div>
                    <img id='pp' src={PP2024} alt={t('pp')} />
                </div>
                <div>
                    <h2>{t('presentation')}</h2>
                    <p>{t('presentationDescOne')}</p>
                    <p>{t('presentationDescTwo')}</p>
                    <div>
                        <button onClick={() => handleButtonClick('contact')}>{t('moreAboutMe')}</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
