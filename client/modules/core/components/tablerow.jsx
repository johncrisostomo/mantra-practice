import React from 'react';

class Tablerow extends React.Component {
  constructor() {
    super();
    this.state = {
      isEditing: false 
    };
  }

  submitEdit(e) {
    e.preventDefault();
    console.log(this.refs.text);
    console.log(this.refs.data);
    this.props.editHandler(this.props.stuff._id, this.refs.text.value, 
      this.refs.data.value);
    this.setState({ isEditing: false});
  }

  edit(e) {
    e.preventDefault();
    this.setState({
      isEditing: true
    });
  }

  cancel(e) {
    e.preventDefault();
    this.setState({
      isEditing: false
    });
  }
  
  
  getTitle() {
    const {title} = this.props.stuff;
    if (this.state.isEditing) {
      return <td><input type="text" ref="text"  placeholder={title} /></td>;
    } else {
      return <td>{title}</td>;
    }
  }

  getData() {
    const {data} = this.props.stuff;
    if (this.state.isEditing) {
      return <td><input type="text" ref="data"  placeholder={data} /></td>;
    } else {
      return <td>{data}</td>;
    }
  }

  getFirstButton() {
    if (this.state.isEditing) {
      return <td><a href="#" onClick={this.submitEdit.bind(this)}>Save</a></td>;
    } else {
      return <td><a href="#" onClick={this.edit.bind(this)}>Edit</a></td>;
    }
  }

  getSecondButton() {
    if (this.state.isEditing) {
      return <td><a href="#" onClick={this.cancel.bind(this)}>Cancel</a></td>;
    } else {
      return <td><a href="#">Delete</a></td>;
    }
  }
  

  render() {
     return (
      <tr>
      {this.getTitle()}
      {this.getData()}
      {this.getFirstButton()}
      {this.getSecondButton()}
      </tr>
     );
   }
}
export default Tablerow;
