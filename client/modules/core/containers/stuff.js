import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import StuffComponent from '../components/stuffcomponent.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('stuffs').ready()) {
    const stuff = Collections.Stuff.find().fetch(); 
    onData(null, {stuff});
  }

};

export const depsMapper = (context, actions) => ({
  edit: actions.stuff.edit,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(StuffComponent);
