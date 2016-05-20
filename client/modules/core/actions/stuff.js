export default {
  edit({Meteor},id, title, data, category) {
    Meteor.call('editstuff.sample', id, title, data, category); 
  }
}
