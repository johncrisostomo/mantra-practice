import {Stuff} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'editstuff.sample'(_id, title, data) {
      check(_id, String);
      check(title, String);
      check(data, String);
      Stuff.update({_id}, {$set: {title, data}});
    }
  });
}
