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

  // @action
  // onMenuItemMouseOver(menu) {
  //   set(menu, 'active', true);
  // }

  // @action
  // onMenuItemMouseLeave(menu) {
  //   set(menu, 'active', false);
  // }

  @action
  onMenuItemClick(menu, e) {
    if (e.target.className.includes('menu-item-dropdown')) {
      set(menu, 'active', !menu.active)
    } else {
      this.set('menuCollapsed', false);
      for (let menu of this.menus) {
        set(menu, 'active', false);
      }
    }
  }

  @action
  onMenuToggle() {
    this.toggleProperty('menuCollapsed');
  }

  init() {
    super.init(...arguments);
    document.body.addEventListener('click', (e) => {
      const { className } = e.target;
      if (
        !className.includes('menu-item-dropdown')
        && !className.includes('menu-icon')
        && !className.includes('menu-icon-img')
      ) {
        for (let menu of this.menus) {
          set(menu, 'active', false);
        }

        this.set('menuCollapsed', false);
      }
    });
  }
}
