import React from 'react';

import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
//This is going to display the results

export default function Results({ response }) {
  return (
    <>
      <h2>Results</h2>

      <ReactJson src={response} theme="solarized"/>
    </>
  );
}

Results.propTypes = {
  response: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};
