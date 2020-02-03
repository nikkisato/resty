import React, { Component } from 'react';
import styles from './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className={styles}>
        <h1>RESTy</h1>
      </header>
    );
  }
}
