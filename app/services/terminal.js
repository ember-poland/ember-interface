import Ember from 'ember';
const { Service, ObjectProxy, PromiseProxyMixin } = Ember;

const { RSVP } = Ember;
const { exec } = requireNode('child_process');
const fs = requireNode('fs');

export default Service.extend({
  execute(command) {
    let commandPromise = new RSVP.Promise((resolve, reject) => {
      exec(command, function(error, stdout) {
        if (error instanceof Error) {
          return reject(error);
        } else {
          return resolve(stdout);
        }
      });
    });

    return this.promiseObjectProxy(commandPromise);
  },

  readPackage(path) {
    return new RSVP.Promise((resolve, reject) => {
      fs.readFile(`${path}/package.json`, 'utf8', (error, data) => {
        if (error) {
          return reject(error);
        } else {
          return resolve(JSON.parse(data));
        }
      });
    });
  },

  promiseObjectProxy(promise) {
    return ObjectProxy.extend(PromiseProxyMixin).create({ promise });
  }
});
