import Ember from 'ember';
const { Component } = Ember;

export default Component.extend({
  classNames: 'project',

  actions: {
    saveProject() {
      this.get('project').save();
    }
  }
});
