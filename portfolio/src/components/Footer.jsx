import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
        <p>© 2024 SaurFort. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
