import Ember from 'ember';

const { Service, inject } = Ember;
const { remote } = requireNode('electron');

export default Service.extend({
  store: inject.service(),
  notify: inject.service(),
  terminal: inject.service(),

  import(path) {
    this.get('terminal').readPackage(path).then((data) => {
      if (!data.devDependencies || !data.devDependencies['ember-cli']) {
        return this.get('notify').error('notify.projects.import.incorrectProject');
      }

      this.get('store').createRecord('project', {
        name: data.name,
        path
      }).save();

      this.get('notify').success('notify.projects.import.imported');
    }, () => {
      this.get('notify').error('notify.projects.import.incorrectProject');
    });
  },

  promptDirectory() {
    return remote.dialog.showOpenDialog({
      properties: ['openDirectory', 'multiSelections']
    });
  }
});
