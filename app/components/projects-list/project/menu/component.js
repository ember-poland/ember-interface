import Ember from 'ember';
const { Component, inject } = Ember;

export default Component.extend({
  notify: inject.service(),
  terminal: inject.service(),
  ideName: 'code',

  actions: {
    remove() {
      this.get('project').destroyRecord().then(() => {
        this.get('notify').success('notify.projects.remove.success');
      });
    },
    
    openInEditor() {
      let projectPath = this.get('project.path')
      let ideName = this.get('ideName');
      return this.get('terminal').execute(`${ideName} ${projectPath}`);
    },

    openInDirectory() {
      let projectPath = this.get('project.path')
      return this.get('terminal').execute(`nautilus ${projectPath}`)
    }
  }
});
