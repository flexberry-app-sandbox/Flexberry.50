import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDИдентификатор: DS.attr('number'),
  адрес: DS.attr('string'),
  городID: DS.attr('number'),
  долгота: DS.attr('decimal'),
  название: DS.attr('string'),
  широта: DS.attr('decimal')
});

export let ValidationRules = {
  iDИдентификатор: {
    descriptionKey: 'models.i-i-s-50-здание.validations.iDИдентификатор.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  адрес: {
    descriptionKey: 'models.i-i-s-50-здание.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  городID: {
    descriptionKey: 'models.i-i-s-50-здание.validations.городID.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  долгота: {
    descriptionKey: 'models.i-i-s-50-здание.validations.долгота.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  название: {
    descriptionKey: 'models.i-i-s-50-здание.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  широта: {
    descriptionKey: 'models.i-i-s-50-здание.validations.широта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗданиеE', 'i-i-s-50-здание', {
    название: attr('Название', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    долгота: attr('Долгота', { index: 2 }),
    широта: attr('Широта', { index: 3 }),
    городID: attr('Город ID', { index: 4 }),
    iDИдентификатор: attr('I d идентификатор', { index: 5 })
  });

  modelClass.defineProjection('ЗданиеL', 'i-i-s-50-здание', {
    название: attr('Название', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    долгота: attr('Долгота', { index: 2 }),
    широта: attr('Широта', { index: 3 }),
    городID: attr('Город ID', { index: 4 }),
    iDИдентификатор: attr('I d идентификатор', { index: 5 })
  });
};
