import {Stuff} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'editstuff.sample'(_id, title, data, category) {
      check(_id, String);
      check(title, String);
      check(data, String);
      check(category, String);
      Stuff.update({_id}, {$set: {title, data, category}});
    },
    'addstuff.sample'(title, data) {
      check(title, String);
      check(data, String);
      Stuff.insert({title, data});
    },
    'sendEmail'() {
      this.unblock();

      Email.send({
        to: "jd@snapzio.com",
        from: "admin@welcomeshop.com",
        subject: "Welcome to Welcome Shop",
        text: "This is a sample email sent to check MAIL_URL"
      });
      console.log('sent email!');
    }
  });
}
