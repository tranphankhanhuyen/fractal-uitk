import Component from '@ember/component';
import layout from './template';
import { action, set } from '@ember/object';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default class ViewHeaderComponent extends Component {
  layout = layout;
  classNames = ['view-header'];
  tagName = 'header';
  menus = [
    {
      name: 'Home',
      route: 'routes.home',
      path: '/'
    },
    {
      name: 'About Us',
      menus: [
        {
          name: 'What is fractal?',
          route: 'routes.approach',
          path: '/what-is-fractal',
          param: 'what-is-fractal'
        },
        {
          name: 'Working with us',
          route: 'routes.approach',
          path: '/working-with-us',
          param: 'working-with-us'
        },
        {
          name: 'Team',
          route: 'routes.team',
          path: '/team'
        }
      ]
    },
    {
      name: 'Approach',
      menus: [
        {
          name: 'Science',
          route: 'routes.approach',
          path: '/science',
          param: 'science'
        },
        {
          name: 'Philosophy',
          route: 'routes.approach',
          path: '/philosophy',
          param: 'philosophy'
        },
        {
          name: 'Tactics',
          route: 'routes.approach',
          path: '/tactics',
          param: 'tactics'
        },
        {
          name: 'Development',
          route: 'routes.approach',
          path: '/development',
          param: 'development'
        }
      ]
    },
    {
      name: 'Blog',
      menus: [
        {
          name: 'Where does innovation come from?',
          route: 'routes.article',
          path: '/blog/where-does-innovation-come-from',
          param: 'where-does-innovation-come-from'
        },
        {
          name: 'Does academic prestige matter?',
          route: 'routes.article',
          path: '/blog/does-academic-prestige-matter',
          param: 'does-academic-prestige-matter'
        },
        {
          name: 'A closer look at a famous lab',
          route: 'routes.article',
          path: '/blog/a-closer-look-at-a-famous-lab',
          param: 'a-closer-look-at-a-famous-lab'
        }
      ]
    },
    {
      name: 'Contact',
      route: 'routes.approach',
      path: '/contact',
      param: 'contact'
    }
  ];

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
