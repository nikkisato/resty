import React, { Component } from 'react';
import History from '../components/History/History';
import Form from '../components/Form/Form';


export default class Resty extends Component {

  state =  {
    URL: '',
    method: '',
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
        <Form 
          URL={this.state.URL} 
          method={this.state.method} 
          reqBody={this.state.reqBody}
          handleChange={this.handleChange} 
          onSubmit={this.handleSubmit} />
      </>
    );
  }
}
