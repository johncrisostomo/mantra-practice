import {Stuff} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('stuffs', function () {
    return Stuff.find();
  });
}
