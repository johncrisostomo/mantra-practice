import React from 'react';

const CategoryTable = ({categories}) => {
  console.log(categories);
  const cat = categories.map((category) => {
    return <td>category.name</td>;
  });
  return (
  <div>
    CategoryTable

  </div>
  );
}
export default CategoryTable;
