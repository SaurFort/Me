import axios from 'axios';
import config from '../config';

const API_URL = config.API + "project.php";

const normalizeLanguageCode = (lang) => {
  switch (lang) {
    case 'fr-FR':
      return 'fr';
    case 'en-US':
    case 'en':
      return 'en';
    default:
      return config.DEFAULT_LANGUAGE;
  }
};

export const getProjects = async (sort = 'latest', lang = 'en') => {
  try {
    const normalizedLang = normalizeLanguageCode(lang);
    const response = await axios.get(`${API_URL}?sort=${sort}&lang=${normalizedLang}`);
    //console.log(`${API_URL}?sort=${sort}&lang=${normalizedLang}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};
