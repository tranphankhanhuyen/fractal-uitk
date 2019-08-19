import Component from '@ember/component';
import layout from './template';
import EmberObject, { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ContactComponent extends Component {
  layout = layout;
  classNames = ['ft-contact'];
  attributeBindings = ['anchor:data-anchor'];
  anchor = 'contact';
  reCaptchaSuccess = false;
  contactForm = EmberObject.create({
    contactName: null,
    email: null,
    affiliation: null,
    text: null
  });
  modal = EmberObject.create({
    open: false,
    message: '',
    sending: false
  });

  @service contact;

  @action
  async submit() {
    const contactName = this.get('contactForm.contactName');
    const email = this.get('contactForm.email');
    const text = this.get('contactForm.text');
    let modalOpen = true;
    let modalMessage = '';
    let sending = false;
    if (!contactName) {
      modalMessage = 'Please enter your contact name';
    } else if (!email) {
      modalMessage = 'Please enter your contact email';
    } else if (!text) {
      modalMessage = 'Please enter your contact message';
    } else {
      sending = true;
      modalMessage = 'Sending contact message...'
    }

    this.modal.setProperties({ open: modalOpen, message: modalMessage, sending });
    if (sending) {
      sending = false;

      const response = await this.contact.sendMessage(this.contactForm);
      if (response.status === 200 || response.status === 202) {
        modalMessage = 'Message has been sent to Fractal.'
      } else {
        modalMessage = 'Not able to send message to Fractal.'
      }
  
      this.modal.setProperties({ open: modalOpen, message: modalMessage, sending });
    }
  }
}
