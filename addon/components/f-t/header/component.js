import Component from '@ember/component';
import layout from './template';
import { action, set } from '@ember/object';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default class ViewHeaderComponent extends Component {
  layout = layout;
  classNames = ['view-header'];
  tagName = 'header';

  menus = null;
  logoPath = null;

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
  onMenuToggle() {
    this.toggleProperty('menuCollapsed');
  }

  @action
  async onLinkClick(menu, event) {
    event.preventDefault();
    // this.router.transitionTo('routes.home').then(() => this.router.transitionTo(menu.route, menu.param));
    this.router.transitionTo(menu.route, menu.param).then(() => {
      const element = document.querySelector(`[data-anchor="${menu.param}"]`);
      if (element instanceof Element) {
        $('html, body').animate({
            scrollTop: $(element).offset().top - 100
        }, 1000);
      } else {
        window.scrollTo(0, 0);
      }
    });
  }
}
