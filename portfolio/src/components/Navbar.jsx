import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const myFunction = () => {
    const topnav = document.getElementById("myTopnav");
    const icon = document.getElementById("menuIcon");
    if (topnav.className === "topnav") {
      topnav.className += " responsive";
    } else {
      topnav.className = "topnav";
    }
    setIsOpen(!isOpen);
  };

  return (
    <nav className="container-topnav">
      <div className="left-topnav">
        <a href="/"><h2>{t('title')}</h2></a>
      </div>

      <div className="topnav" id="myTopnav">
        <div className="dropdown">
          <a className="nav-link" href="/">{t('home')}</a>
          <a className="nav-link" href="/projects">{t('projects')}</a>
          <a className="nav-link" href="/contact">{t('contact')}</a>
        </div>
        <a href="#" className={`icon ${isOpen ? '' : 'rotated'}`} id="menuIcon" onClick={myFunction}>III</a>
      </div>
    </nav>
  );
};

export default Navbar;
