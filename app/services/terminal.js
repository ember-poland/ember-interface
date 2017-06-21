import Ember from 'ember';
const { Service, ObjectProxy, PromiseProxyMixin } = Ember;

const { RSVP } = Ember;
const { exec } = requireNode('child_process');

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

    return this._promiseObjectProxy(commandPromise);
  },

  _promiseObjectProxy(promise) {
    return ObjectProxy.extend(PromiseProxyMixin).create({ promise });
  }
});
