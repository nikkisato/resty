import React, { Component } from 'react';
import History from '../components/History/History';
import Form from '../components/Form/Form';
import Results from '../components/Results/Results';
import styles from './Resty.css';

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

    this.setState(prevState => ({
      history: [
        ...prevState.history, 
        {
          method: this.state.method,
          URL: this.state.URL
        }
      ]

    }));

    return fetch(this.state.URL, {
      method: this.state.method, 
      body: ['POST', 'PUT', 'PATCH'].includes(this.state.method) ? this.state.reqBody : null, 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
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
        <div className={styles.wrapper}> 
          <History history={this.state.history} />
          <Form
            URL={this.state.URL}
            method={this.state.method}         
            reqBody={this.state.reqBody}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
          <Results response={this.state.results} />
        </div>
      </>
    );
  }
}
