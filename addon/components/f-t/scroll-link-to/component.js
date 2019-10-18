import Component from '@ember/component';
import layout from './template';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default class ScrollLinkToComponent extends Component {
  layout = layout;
  tagName = 'a';
  attributeBindings = ['path:href'];
  route = null;
  param = null;
  path = null;

  @service router;

  click(event) {
    event.preventDefault();
    this.param = this.param || undefined;
    const isPageFractal = document.querySelector('[data-style="fractal"]') instanceof Element;
    const header = document.querySelector('.ft-header');
    const headerHeight = header.getBoundingClientRect().height;
    if (this.param) {
      this.router.transitionTo(this.route, this.param).then(() => {
        const element = document.querySelector(`[data-anchor="${this.param}"]`);
        if (element instanceof Element) {
          const isMobile = document.body.offsetWidth <= 540;
          const paddingTop = (isPageFractal && this.param === "working-with-us" && !isMobile) ? 100 + headerHeight : headerHeight;
          $('html, body').animate({
            scrollTop: Math.round($(element).offset().top) - paddingTop
          }, 500);
        } else {
          window.scrollTo(0, 0);
        }
      });
    } else {
      this.router.transitionTo(this.route).then(() => window.scrollTo(0, 0));
    }
  }
}
