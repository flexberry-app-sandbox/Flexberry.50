import {
  defineNamespace,
  defineProjections,
  Model as МетеостанцияMixin
} from '../mixins/regenerated/models/i-i-s-50-метеостанция';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(МетеостанцияMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
