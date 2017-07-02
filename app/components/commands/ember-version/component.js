import Ember from 'ember';
const { Component, inject, computed } = Ember;

export default Component.extend({
  terminal: inject.service(),
  path: '',

  // TODO add some caching later on - it is very heavy operation
  version: computed('path', 'rootPath', function() {
    let versionCommand = 'npm list ember-cli | grep ember-cli@ | cut -d"@" -f2';
    return this.get('terminal').execute(`cd ${this.get('path')} && ${versionCommand}`);
  })
});
