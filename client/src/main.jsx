import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { persistor, store } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_en from "./locales/en/global.json";
import global_es from "./locales/es/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "auto",
  fallbackLng: "es",
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <I18nextProvider i18n={i18next}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </I18nextProvider>
);
