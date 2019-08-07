import Service from '@ember/service';
import fetch from 'fetch';

export default class ContactService extends Service {
  host = 'https://fractal-services.herokuapp.com/v1/mail/send';
  toEmail = ['arijit@fractaltx.com', 'uyen.tran@fractaltx.com'];

  async sendMessage(contact) {
    try {
      const payload = {
        from: contact.email,
        to: this.toEmail,
        subject: 'Contact by ' + contact.contactName,
        text: contact.text
      };

      let response = await fetch(this.host, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      return Array.isArray(response) ? response.firstObject : response;
    } catch (ex) {
      return { status: 400 }
    }
  }
}