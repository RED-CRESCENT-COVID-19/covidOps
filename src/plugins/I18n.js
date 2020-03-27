import * as Localization from "expo-localization";
import I18n from "i18n-js";
import en from "../lang/en";
import ur from "../lang/ur";

Localization.locale = "ur";
I18n.fallbacks = true;
I18n.translations = { ur, en };
I18n.locale = Localization.locale;
// I18n.Localization = Localization
// This will log 'en' for me, as I'm an English speaker
console.log("Localization.locale is: ", Localization.locale);
// const Localizations = Localization;
// export Localizations;
// const I18n = i18n;
export default I18n;
