import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./lang/en.json";
import ru from "./lang/ru.json";

import "./styles/normalize.css";
import "./styles/main.scss";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: en,
      },

      ru: {
        translation: ru,
      },
    },
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["cookie", "navigator"],
      caches: ["cookie"],
      cookieMinutes: 120,
      cookieOptions: { path: "/", sameSite: "strict" },
    },
  });

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById("root"));
