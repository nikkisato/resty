import React, { Component } from 'react';
import styles from './Form.css';

export default class Input extends Component {
  render() {
    return (
      <div className={styles.container}>
        <input placeholder="URL"></input>
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
