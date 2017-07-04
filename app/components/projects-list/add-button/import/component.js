import Ember from 'ember';
const { Component, inject } = Ember;

export default Component.extend({
  tagName: '',
  interface: inject.service(),

  actions: {
    import() {
      let paths = this.get('interface').promptDirectory();

      if (paths) {
        paths.forEach((path) => this.get('interface').import(path))
      }
    }
  }
});
