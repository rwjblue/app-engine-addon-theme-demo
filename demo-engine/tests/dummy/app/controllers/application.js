import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

// An example of demo-engines test app being able to
// change the current theme.

export default Controller.extend({
  themeChanger: service(),

  theme: alias('themeChanger.theme'),

  actions: {
    setThemeOne() {
      this.get('themeChanger').set('theme', 'theme-1');
    },

    setThemeTwo() {
      this.get('themeChanger').set('theme', 'theme-2');
    }
  }
});
