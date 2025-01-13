export default defineI18nConfig(() => ({
    langDir: "assets/locales/",
    legacy: false,
    defaultLocale: 'en',
    locales: [
        { code: 'en', name: 'en/index.ts' },
        { code: 'fr', name: 'fr/index.ts' },
    ],
    messages: {
        en: {
            welcome: 'Welcome'
        },
        fr: {
            welcome: 'Bienvenue'
        }
    }
}))