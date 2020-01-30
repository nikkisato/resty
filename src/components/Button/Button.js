import React, { Component } from 'react';
import styles from './History.css';

export default class History extends Component {
  render() {
    return (
      <div>
        <button>GET</button>
        <button>POST</button>
        <button>PUT</button>
        <button>PATCH</button>
        <button>DELETE</button>
        <button>GO!</button>
      </div>
    );
  }
}
