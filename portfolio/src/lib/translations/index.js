import i18n from 'sveltekit-i18n';
import { dev } from '$app/environment';
import lang from './lang.json';

export const defaultLocale = 'en';

/** @type {import('sveltekit-i18n').Config} */
export const config = {
    log: {
        level: dev ? 'warn' : 'error',
    },
    translations: {
        en: { lang },
        fr: { lang },
    },
    loaders: [
        {
            locale: 'en',
            key: 'common',
            loader: async () => (await import('./en/common.json')).default,
        },
        {
            locale: 'fr',
            key: 'common',
            loader: async () => (await import('./fr/common.json')).default,
        },
        {
            locale: 'fr',
            key: 'home',
            routes: ['', '/'],
            loader: async () => (await import('./fr/home.json')).default,
        },
        {
            locale: 'fr',
            key: 'error',
            routes: ['error'],
            loader: async () => (await import('./fr/error.json')).default,
        },
    ],
};

export const { t, loading, locales, locale, translations, loadTranslations, addTranslations, setLocale, setRoute } = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations ...'));