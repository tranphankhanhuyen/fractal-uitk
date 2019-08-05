import Component from '@ember/component';
import layout from './template';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default class ScrollLinkToComponent extends Component {
  layout = layout;
  @service router;
  tagName = 'a';
  attributeBindings = ['path:href'];
  route = null;
  param = null;
  path = null;

  click(event) {
    event.preventDefault();
    this.param = this.param || undefined;
    if (this.param) {
      this.router.transitionTo(this.route, this.param).then(() => {
        const element = document.querySelector(`[data-anchor="${this.param}"]`);
        if (element instanceof Element) {
          $('html, body').animate({
            scrollTop: $(element).offset().top - 100
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
