import i18next, { i18n } from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

const languages = ['en', 'ro']


i18next.use(Backend)
.use(initReactI18next)
.init({

    lng:'ro',
    fallbackLng:'ro',
    debug:true,
    interpolation:{
        escapeValue:false,
    },
    react:{
        useSuspense:false
    }
})