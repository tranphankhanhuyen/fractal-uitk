import Component from '@ember/component';
import layout from './template';
import { action, computed } from '@ember/object';
import { htmlSafe } from '@ember/template';

export default class TeamBioComponent extends Component {
  layout = layout;
  classNames = ['team-bio'];
  name = '';
  title = '';
  bio = '';
  image = '';
  collapsed = true;

  @computed('bio')
  get htmlBio() {
    return htmlSafe(this.bio);
  }

  @action
  onToggleBio() {
    this.toggleProperty('collapsed');
  }
}
