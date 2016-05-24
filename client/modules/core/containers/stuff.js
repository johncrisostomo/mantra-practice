import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import StuffComponent from '../components/stuffcomponent.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('stuffs').ready() && Meteor.subscribe('categories').ready()) {
    const stuff = Collections.Stuff.find().fetch(); 
    const categories = Collections.Categories.find().fetch();
    onData(null, {stuff, categories});
  }

};

export const depsMapper = (context, actions) => ({
  sendEmail: actions.stuff.sendEmail,
  edit: actions.stuff.edit,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(StuffComponent);
