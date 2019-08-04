import Component from '@ember/component';
import layout from './template';

export default class ViewFooterComponent extends Component {
  layout = layout;
  classNames = ['view-footer'];
  tagName = 'footer';
  footerImage = null;
}
