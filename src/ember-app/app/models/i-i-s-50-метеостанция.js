import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as МетеостанцияMixin
} from '../mixins/regenerated/models/i-i-s-50-метеостанция';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(МетеостанцияMixin, Validations, {
});

defineProjections(Model);

export default Model;
