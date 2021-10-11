import i18n from "i18next";
import translationEn from './locales/en/translation.json'
import translationRo from './locales/ro/translation.json'

import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
i18n  
.use(initReactI18next) // passes i18n down to react-i18next 
.use(LanguageDetector)
 .init({    
resources:{
  en:{
    translationEn
  },
  ro:{
   translationRo
  }
},
               supportedLngs:['en', 'ro'],                
      fallbackLng: "ro", 
             detection: { 
            order: ['cookie','querystring','htmlTag',  'localStorage', 'path', 'subdomain'],
          caches:['cookie']
         },
    
   react:{useSuspense:false}
 });
