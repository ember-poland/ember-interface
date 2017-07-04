import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

const { inject, computed, RSVP } = Ember;

export default Model.extend({
  terminal: inject.service(),

  name: attr(),
  path: attr(),

  package: computed('path', function() {
    let promise = RSVP.resolve({});

    if (this.get('path')) {
      promise = this.get('terminal').readPackage(this.get('path'));
    }

    return this.get('terminal').promiseObjectProxy(promise);
  }).readOnly(),

  version: computed.alias('package.version'),
  dependecies: computed('package.dependencies', 'package.devDependencies', function() {
    return Ember.assign({}, this.get('package.dependencies'), this.get('package.devDependencies'));
  })
});
