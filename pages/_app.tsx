import '../sass/main.scss'
import type { AppProps } from 'next/app'
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import Navbar from 'components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
      fallbackLng: "en",
      detection: {
        order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
        caches: ['cookie']
      },
      backend: {
        loadPath: '/assets/locales/{{lng}}/translation.json'
      },
      react: { useSuspense: false }
    });
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
