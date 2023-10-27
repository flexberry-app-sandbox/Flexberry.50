import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IIS50ГородLForm from './forms/i-i-s-50-город-l';
import IIS50ЗданиеLForm from './forms/i-i-s-50-здание-l';
import IIS50МетеостанцияLForm from './forms/i-i-s-50-метеостанция-l';
import IIS50ГородEForm from './forms/i-i-s-50-город-e';
import IIS50ЗданиеEForm from './forms/i-i-s-50-здание-e';
import IIS50МетеостанцияEForm from './forms/i-i-s-50-метеостанция-e';
import IIS50ГородModel from './models/i-i-s-50-город';
import IIS50ЗданиеModel from './models/i-i-s-50-здание';
import IIS50МетеостанцияModel from './models/i-i-s-50-метеостанция';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-50-город': IIS50ГородModel,
    'i-i-s-50-здание': IIS50ЗданиеModel,
    'i-i-s-50-метеостанция': IIS50МетеостанцияModel
  },

  'application-name': '50',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': '50',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '50',
          title: '50'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        50: {
          caption: '50',
          title: '50',
          'i-i-s-50-город-l': {
            caption: 'Город',
            title: ''
          },
          'i-i-s-50-метеостанция-l': {
            caption: 'Метеостанция',
            title: ''
          },
          'i-i-s-50-здание-l': {
            caption: 'Здание',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-50-город-l': IIS50ГородLForm,
    'i-i-s-50-здание-l': IIS50ЗданиеLForm,
    'i-i-s-50-метеостанция-l': IIS50МетеостанцияLForm,
    'i-i-s-50-город-e': IIS50ГородEForm,
    'i-i-s-50-здание-e': IIS50ЗданиеEForm,
    'i-i-s-50-метеостанция-e': IIS50МетеостанцияEForm
  },

});

export default translations;
