export default {
  edit({Meteor},id, title, data) {
    Meteor.call('editstuff.sample', id, title, data); 
  }
}
