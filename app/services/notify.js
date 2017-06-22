import Ember from 'ember';
const { Service, inject, assign } = Ember;

export default Service.extend({
  notifications: inject.service('notification-messages'),
  intl: inject.service(),

  error(translation, options = {}) {
    let message = this.get('intl').t(translation)
    let config = assign({}, this.get('options'), options);

    return this.get('notifications').error(message, config);
  },

  warning(translation, options = {}) {
    let message = this.get('intl').t(translation)
    let config = assign({}, this.get('options'), options);

    return this.get('notifications').warning(message, config);
  },

  success(translation, options = {}) {
    let message = this.get('intl').t(translation)
    let config = assign({}, this.get('options'), options);

    return this.get('notifications').success(message, config);
  },

  info(translation, options = {}) {
    let message = this.get('intl').t(translation);
    let config = assign({}, this.get('options'), options);

    return this.get('notifications').info(message, config);
  },

  options: {
    autoClear: true,
  }
});
