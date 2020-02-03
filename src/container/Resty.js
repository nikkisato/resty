import React, { Component } from 'react';
import History from '../components/History/History';
import Form from '../components/Form/Form';

export default class Resty extends Component {
  state = {
    URL: '',
    method: '',
    reqBody: '',
    results: [], 
    history: []
  };
  handleSubmit = (event) => {
    event.preventDefault();
    fetch(this.state.url, {
      method: this.state.method, 
      body: ['POST', 'PUT', 'PATCH'].includes(this.state.method) ? this.state.reqBody : null
    })
      .then(res => res.json())
      .then(results => this.setState(() => ({
        results
      })));
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
