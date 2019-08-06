import Component from '@ember/component';
import layout from './template';

export default class HomeContentComponent extends Component {
  layout = layout;
  classNames = ['home-content'];
  attributeBindings = ['anchor:data-anchor', 'style:data-style'];
  title = null;
  image = null;
  body = null;
  anchor = null;
  style = null;
}
