import Ember from 'ember';
const { Route } = Ember;

export default Route.extend({
  intl: Ember.inject.service(),

  beforeModel() {
    return this.get('intl').setLocale('en-us');
  }
});
