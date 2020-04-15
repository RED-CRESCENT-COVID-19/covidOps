import * as Localization from "expo-localization";
import I18n from "i18n-js";

// import lang files
import en from "../lang/en";
import ur from "../lang/ur";

Localization.locale = "ur";
I18n.fallbacks = true;
I18n.translations = { ur, en };
I18n.locale = Localization.locale;

export default I18n;
