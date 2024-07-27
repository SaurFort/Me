import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PP2024 from '../assets/images/pp-2024.png';
import CSSLogo from '../assets/images/css-logo.png';
import HTMLLogo from '../assets/images/html-logo.png';
//import JavaLogo from '../assets/images/java-logo.png';
import MySQLLogo from '../assets/images/mysql-logo.png';
import PHPLogo from '../assets/images/php-logo.png';
//import ReactLogo from '../assets/images/react-logo.png';



const Contact = () => {
    const { t } = useTranslation();
    const [languagesSkills] = useState([
        { name: 'CSS', level: "goodLevel", logo: CSSLogo },
        { name: 'HTML', level: "goodLevel", logo: HTMLLogo },
        //{ name: 'Java', level: "beginner", logo: JavaLogo },
        { name: 'PHP', level: "competent", logo: PHPLogo },
    ]);     
    const [frameworksAndLibrairiesSkills] = useState([
        //{ name: 'React', level: "beginner", logo: ReactLogo },
        
    ]);
    const [toolsAndTechnologiesSkills] = useState([
        { name: 'MySQL', level: "competent", logo: MySQLLogo }

    ]);

    return (
        <>
            <h1>{t('contact')}</h1>
            <section id='presentation-title'>
                <div>
                    <img id='pp' src={PP2024} alt={t('pp')} />
                </div>
                <div>
                    <h2 id='presentation'>{t('presentation')}</h2>
                    <p>{t('presentationDescOne')}</p>
                    <p>{t('presentationDescTwo')}</p>
                </div>
            </section>
            <hr/>
            <h2>{t('skills')}</h2>
            <h3>{t('languages')}</h3>
            <section className='section-grid grid-3'>
                {languagesSkills.map((skill) => 
                    (<div className='skill-card' id={skill.name}>
                        <div className='skill-card--title'>
                            <img src={skill.logo} />
                            <h4>{skill.name}</h4>
                        </div>
                        <p>{t(skill.level)}</p>
                    </div>))}
            </section>
        </>
    )
};

export default Contact;
