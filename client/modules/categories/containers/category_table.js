import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import CategoryTable from '../components/category_table.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if(Meteor.subscribe('categories').ready()) {
    const categories=  Collections.Categories.find().fetch();   
    onData(null, {categories});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CategoryTable);
