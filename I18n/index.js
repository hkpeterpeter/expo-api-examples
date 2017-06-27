import { Util } from 'expo';
import I18n from 'i18n-js';

// Import Language Package
import en from './locales/en';
import zh from './locales/zh';
import cn from './locales/cn'; 


I18n.initAsync = async () => {
  const locale = await Util.getCurrentLocaleAsync();
  I18n.locale = (locale) ? locale.replace(/_/, '-') : '';
}

I18n.fallbacks = true;

I18n.translations = {
  en,
  zh,
  cn,
};

I18n.locale = 'zh';


export default I18n;
