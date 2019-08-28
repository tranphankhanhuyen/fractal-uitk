import Component from '@ember/component';
import layout from './template';
import { action } from '@ember/object';

export default class HomeContentComponent extends Component {
  layout = layout;
  classNames = ['ft-home-content'];
  attributeBindings = ['anchor:data-anchor'];
  title = null;
  image = null;
  body = null;
  anchor = null;
  expandContent = false;

  @action
  onExpandContentToggle() {
    this.toggleProperty('expandContent');
  }
}
