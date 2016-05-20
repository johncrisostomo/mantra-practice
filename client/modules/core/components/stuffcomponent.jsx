import React from 'react';
import StuffTable from './stufftable.jsx';

class Stuffcomponent extends React.Component {
  constructor() {
    super();
    this.state = { filter: 'All' };
  }

  updateFilter() {
    const newFilter = this.refs.filterDropDown.value;
    console.log(newFilter);
    this.setState({filter: newFilter}); 
  }

  render() {
    let categories = this.props.categories.map((category) => {
      return <option>{category.name}</option>
    });

    categories.unshift(<option>All</option>);

    return (
      <div>
        <div className="container">
        <h2 style={{"display":"inline" }}>Filter by : </h2>
        <select style={{"width": 200, "display":"inline"}} className="form-control" ref="filterDropDown"  onChange={this.updateFilter.bind(this)}>
         {categories}
        </select>
        <hr />
        </div>
        <StuffTable 
          editFunction={this.props.edit} 
          stuff={this.props.stuff} 
          categories={this.props.categories}
          filter={this.state.filter}
          FilterHandler={this.updateFilter}
        />
      </div>
    );
  }
}

export default Stuffcomponent;
