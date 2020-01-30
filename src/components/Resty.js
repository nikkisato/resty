import React, { Component } from 'react';
import Header from './Header/Header';
import History from './History/History';

export default class Resty extends Component {
  render() {
    return (
      <>
        <Header />
        <History />
      </>
    );
  }
}
