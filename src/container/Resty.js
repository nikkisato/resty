import React, { Component } from 'react';
import History from '../components/History/History';
import Form from '../components/Form/Form';


export default class Resty extends Component {

  state =  {
    URL: '',
    methods: '',
    reqBody: ''  
  }
  handleSubmit = event => {
    event.preventDefault();

  };
  
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
 
  };
  
  render() {
    return (
      <>
        <History />
        <Form URL={this.state.URL} handleChange={this.handleChange} 
          onSubmit={this.handleSubmit} />
      </>
    );
  }
}
