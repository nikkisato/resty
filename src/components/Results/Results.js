import React from 'react';
import styles from './Results.css';
import PropTypes from 'prop-types';
import ReactJSON from 'react-json-view';
//This is going to display the results

export default function Results({ response }) {
  return (
    <>
      <h2>Results</h2>
      <div className={styles.results}>
        <ReactJSON src='response' />
      </div>
    </>
  );
}

Results.propTypes = {
  response: PropTypes.object
};
