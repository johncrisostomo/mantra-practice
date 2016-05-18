import React from 'react';
import Tablerow from './tablerow.jsx';

class Stufftable extends React.Component {

  render() {
    console.log(this.props.stuff);
    const rows = this.props.stuff.map((stuff) => {
      return <Tablerow editHandler={this.props.editFunction}  key={stuff._id} stuff={stuff} />
    });
    console.log(rows);
    return (
     <div>
      <table border="1">
        <tbody>
        {rows}
        </tbody>
      </table>
     </div>
    );
  }
}
export default Stufftable;
