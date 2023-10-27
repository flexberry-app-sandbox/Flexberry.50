import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.50.caption'),
          title: i18n.t('forms.application.sitemap.50.title'),
          children: [{
            link: 'i-i-s-50-город-l',
            caption: i18n.t('forms.application.sitemap.50.i-i-s-50-город-l.caption'),
            title: i18n.t('forms.application.sitemap.50.i-i-s-50-город-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-50-метеостанция-l',
            caption: i18n.t('forms.application.sitemap.50.i-i-s-50-метеостанция-l.caption'),
            title: i18n.t('forms.application.sitemap.50.i-i-s-50-метеостанция-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-50-здание-l',
            caption: i18n.t('forms.application.sitemap.50.i-i-s-50-здание-l.caption'),
            title: i18n.t('forms.application.sitemap.50.i-i-s-50-здание-l.title'),
            icon: 'tasks',
            children: null
          }]
        }
      ]
    };
  }),
})