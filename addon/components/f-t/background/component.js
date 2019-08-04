import Component from '@ember/component';
import layout from './template';

export default class ViewBackgroundComponent extends Component {
  layout = layout;
  classNames = ['view-background'];
  name = '';
  height = 100;
  caption = null;

  didRender() {
    this.element.style.background = `url("/images/background/${this.name}") center center / cover no-repeat fixed`;
    this.element.style.minHeight = `${this.height}vh`;
  }
}
