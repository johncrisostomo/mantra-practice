import React from 'react';
import Tablerow from './tablerow.jsx';

class Stufftable extends React.Component {
  render() {
    const rows = this.props.stuff.map((stuff) => {
      if (this.props.filter === 'All') {
        return <Tablerow editHandler={this.props.editFunction}  key={stuff._id} 
           stuff={stuff} categories={this.props.categories} 
           filterHandler={this.props.filterHandler}
           />
      }
      
      if (this.props.filter === stuff.category) {
        return <Tablerow editHandler={this.props.editFunction}  key={stuff._id} 
           stuff={stuff} categories={this.props.categories}
           filterHandler={this.props.filterHandler}
           />
      }
    });
    return (
     <div>
      <table className="table table-striped table-bordered text-center">
        <thead>
          <tr>
            <th className="text-center">Stuff</th>
            <th className="text-center">Stuff Data</th>
            <th className="text-center">Category</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
      </table>
     </div>
    );
  }

}

export default Stufftable;
