import React from 'react';
import StuffComponent from '../containers/stuff.js';
import CategoryTable from '../../categories/containers/category_table.js';

const Home = () => (
  <div>
    <CategoryTable />
    <h1>Listing all stuff</h1>
    <StuffComponent /> 
  </div>
);

export default Home;
