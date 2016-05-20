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
    this.props.editHandler(this.props.stuff._id, this.refs.text.value, 
      this.refs.data.value, this.refs.category.value);
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
      return <td><input className="form-control" type="text" ref="text" defaultValue={title} /></td>;
    } else {
      return <td>{title}</td>;
    }
  }

  getData() {
    const {data} = this.props.stuff;
    if (this.state.isEditing) {
      return <td><input className="form-control" type="text" ref="data" defaultValue={data} /></td>;
    } else {
      return <td>{data}</td>;
    }
  }

  getCategory() {
    const {category} = this.props.stuff;
    const categories = this.props.categories.map((category) => {
      return <option key={category._id}>{category.name}</option>;
    });
    if (this.state.isEditing) { 
      return (
        <td>
          <select className="form-control" ref="category">
            {categories}
          </select>
        </td>
      );
    } else {
      return <td>{category}</td>;
    }
  }

  getFirstButton() {
    if (this.state.isEditing) {
      return <td><a className="btn btn-success" href="#" onClick={this.submitEdit.bind(this)}>Save</a></td>;
    } else {
      return <td><a className="btn btn-warning"  href="#" onClick={this.edit.bind(this)}>Edit</a></td>;
    }
  }

  getSecondButton() {
    if (this.state.isEditing) {
      return <td><a className="btn btn-danger" href="#" onClick={this.cancel.bind(this)}>Cancel</a></td>;
    } else {
      return <td><a className="btn btn-danger" href="#">Delete</a></td>;
    }
  }

  render() {
     return (
      <tr>
      {this.getTitle()}
      {this.getData()}
      {this.getCategory()}
      {this.getFirstButton()}
      {this.getSecondButton()}
      </tr>
     );
   }
}
export default Tablerow;
