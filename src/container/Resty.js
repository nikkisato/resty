import React, { Component } from 'react';
import History from '../components/History/History';
import Form from '../components/Form/Form';

export default class Resty extends Component {
  state = {
    URL: '',
    method: '',
    reqBody: ''
  };
  handleSubmit = event => {
    event.preventDefault();
    
    //fetch with current url in state and method 
    // this.state.method
    //.then off fetch res.json update reqbody with results
  };

  handleChange = ({ target }) => {
    console.log(target.name, target.value);
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
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </>
    );
  }
}
