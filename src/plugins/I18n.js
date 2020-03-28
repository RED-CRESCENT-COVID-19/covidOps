import * as Localization from "expo-localization";
import I18n from "i18n-js";

// import I18n from "react-native-i18n";
// // import * as RNLocalize from "react-native-localize";

import en from "../lang/en";
import ur from "../lang/ur";

// // const locales = RNLocalize.getLocales();

// // if (Array.isArray(locales)) {
// //   I18n.locale = locales[0].languageTag;
// // }

Localization.locale = "ur";
I18n.fallbacks = true;
I18n.translations = { ur, en };
I18n.locale = Localization.locale;
// I18n.Localization = Localization
// This will log 'en' for me, as I'm an English speaker

// const Localizations = Localization;
// export Localizations;
// const I18n = i18n;
export default I18n;
