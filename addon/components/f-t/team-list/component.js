import Component from '@ember/component';
import layout from './template';

export default class TeamListComponent extends Component {
  layout = layout;
  classNames = ['ft-team-list'];
  defaultImageUrl = "/images/blank-profile-picture.png";
  teamGroups = null;
}
