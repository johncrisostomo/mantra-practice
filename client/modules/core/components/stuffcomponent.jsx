import React from 'react';
import StuffTable from './stufftable.jsx';

class Stuffcomponent extends React.Component {
  handleEdit(id, title, data) {
    edit(id, title, data);  
  }

  render() {
    return (
      <div>
        <StuffTable editFunction={this.props.edit} stuff={this.props.stuff} />
      </div>
    );
  }
}

export default Stuffcomponent;
