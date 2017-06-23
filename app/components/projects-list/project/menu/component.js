import Ember from 'ember';
const { Component, inject } = Ember;

export default Component.extend({
  notify: inject.service(),

  actions: {
    remove() {
      this.get('project').destroyRecord().then(() => {
        this.get('notify').success('notify.projects.remove.success');
      });
    }
  }
});
