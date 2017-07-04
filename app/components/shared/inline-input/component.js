// {{shared/inline-input value="My Input" type="text" onChange=(action 'saveProject')}}

import Ember from 'ember';

const { Component, computed, run } = Ember;

export default Component.extend({
  tagName: 'span',
  isEditing: false,
  isHovering: false,
  type: 'text',
  value: '',

  inputValue: computed('value', function() {
    return this.get('value');
  }),

  onChange() {},

  mouseEnter() {
    this.set('isHovering', true);
  },

  mouseLeave() {
    this.set('isHovering', false);
  },

  actions: {
    edit() {
      this.set('isEditing', true);
      run.scheduleOnce('afterRender', () => {
        this.$('input').focus();
      });
    },

    save() {
      this.set('value', this.get('inputValue'));
      this.set('isEditing', false);
      this.get('onChange')(this.get('inputValue'));
    },
  }
});
