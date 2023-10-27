import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-50-город-l');
  this.route('i-i-s-50-город-e',
  { path: 'i-i-s-50-город-e/:id' });
  this.route('i-i-s-50-город-e.new',
  { path: 'i-i-s-50-город-e/new' });
  this.route('i-i-s-50-здание-l');
  this.route('i-i-s-50-здание-e',
  { path: 'i-i-s-50-здание-e/:id' });
  this.route('i-i-s-50-здание-e.new',
  { path: 'i-i-s-50-здание-e/new' });
  this.route('i-i-s-50-метеостанция-l');
  this.route('i-i-s-50-метеостанция-e',
  { path: 'i-i-s-50-метеостанция-e/:id' });
  this.route('i-i-s-50-метеостанция-e.new',
  { path: 'i-i-s-50-метеостанция-e/new' });
});

export default Router;
