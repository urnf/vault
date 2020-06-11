import Actions from './replication-actions-single';
import layout from '../templates/components/replication-action-promote';
import keys from 'vault/lib/keycodes';

export default Actions.extend({
  layout,
  onSubmit() {},
  actions: {
    onSubmit() {
      if (event.keyCode === keys.ESC) {
        // if escape close modal and return
        this.toggleProperty('isModalActive');
        return;
      }
      return this.onSubmit(...arguments);
    },
  },
});
