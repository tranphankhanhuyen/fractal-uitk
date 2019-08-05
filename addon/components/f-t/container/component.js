import Component from '@ember/component';
import layout from './template';

export default class ViewContainerComponent extends Component {
  layout = layout;
  classNames = ['ft-container container'];
}
