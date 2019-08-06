import Component from '@ember/component';
import layout from './template';

export default class ViewBackgroundComponent extends Component {
  layout = layout;
  classNames = ['ft-background'];
  attributeBindings = ['style:data-style'];
  name = '';
  height = 100;
  caption = null;
  fixed = true;
  style = null;

  didRender() {
    this.element.style.background = `url("/images/background/${this.name}") center center / cover no-repeat ${this.fixed ? 'fixed' : ''}`;
    this.element.style.minHeight = `${this.height}vh`;
  }
}
