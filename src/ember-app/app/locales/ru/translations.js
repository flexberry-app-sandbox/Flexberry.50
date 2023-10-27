import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': '50',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '50',
          title: '50'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
