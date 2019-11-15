import React, { Component } from 'react';
import { Form, Label, Button } from 'semantic-ui-react';

class Register extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      password: '',
      email: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    console.log('hello')
    const registerResponse = await fetch(process.env.REACT_APP_API_URL + '/user/register', {
      method: 'POST',
      credentials: 'include', // this sends our session cookie with our request
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const parsedResponse = await registerResponse.json();

    if(parsedResponse.status.message === 'Success'){
      // change our component
      console.log('success login')
      // this automatically get passed to your component as a prop
      this.props.history.push('/dogs');
    }
  }
  render(){
    return (

      <Form onSubmit={this.handleSubmit}>
        <Label> Username</Label>
        <Form.Input type='text' name="username" onChange={this.handleChange} />
        <Label> Password</Label>
        <Form.Input type='password' name="password" onChange={this.handleChange} />
        <Label> Email</Label>
        <Form.Input type='text' name="email" onChange={this.handleChange} />
        <Button type="Submit" color="green">Register</Button>
      </Form>
      )
  }
}

export default Register;
