import Ember from 'ember';
const { Component, inject, computed } = Ember;

export default Component.extend({
  terminal: inject.service(),

  version: computed(function() {
    return this.get('terminal').execute('ember -v');
  })
});
