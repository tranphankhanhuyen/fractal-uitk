import Component from '@ember/component';
import layout from './template';
import { action, set } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ViewHeaderComponent extends Component {
  layout = layout;
  classNames = ['ft-header'];
  tagName = 'header';

  menus = null;
  logoPath = null;
  menuCollapsed = false;

  @service router;

  @action
  onMenuItemMouseOver(menu) {
    set(menu, 'active', true);
  }

  @action
  onMenuItemMouseLeave(menu) {
    set(menu, 'active', false);
  }

  @action
  onMenuItemClick() {
    this.set('menuCollapsed', false);
  }

  @action
  onMenuToggle() {
    this.toggleProperty('menuCollapsed');
  }
}
