import React, { Component } from 'react';


class CreateDog extends Component {
  constructor(){
    super();

    this.state = {
      name: '',
      owner: '',
      breed: ''
    }
  }
  handleChange = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }
  render(){
    return (
      <React.Fragment>
        <h4>Create Dog</h4>
        <form onSubmit={(e) => this.props.addDog(e, this.state)}>
          <label>Dog:</label>
          <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
          <label>Owner:</label>
          <input type='text' name='owner' value={this.state.owner} onChange={this.handleChange}/>
          <label>Breed:</label>
          <input type='text' name='breed' value={this.state.breed} onChange={this.handleChange}/>
          <button type='Submit'>Create Dog</button>
        </form>
      </React.Fragment>
      )
  }
}

export default CreateDog;
