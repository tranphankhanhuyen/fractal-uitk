import Component from '@ember/component';
import layout from './template';
import { action, set } from '@ember/object';

export default class HomeColumnsComponent extends Component {
  layout = layout;
  classNames = ['home-columns'];
  attributeBindings = ['anchor:data-anchor'];
  headline = null;
  subHeadline = null;
  columns = null;
  anchor = null;

  @action
  onExpandContentToggle(column) {
    set(column, 'expandContent', !column.expandContent);
  }
}