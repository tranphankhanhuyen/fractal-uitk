import Component from '@ember/component';
import layout from './template';
import { action } from '@ember/object';


export default class ContactComponent extends Component {
  layout = layout;
  classNames = ['contact'];
  anchor = 'contact';
  reCaptchaSuccess = false;
  contactForm = {
    contactName: null,
    email: null
  };

  @action
  submit() {}

  @action
  onCaptchaResolved(reCaptchaResponse = {}) {
    this.set('reCaptchaSuccess', reCaptchaResponse.success)
  }
}
