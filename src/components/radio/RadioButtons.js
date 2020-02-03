import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from './RadioButton';

const RadioButtons = ({  method, onChange }) => {
  const radioButtons = [
    { label: 'Get', value: 'GET' },
    { label: 'Post', value: 'POST' },
    { label: 'Put', value: 'PUT' },
    { label: 'Patch', value: 'PATCH' },
    { label: 'Delete', value: 'DELETE' }
  ];
  const radioButtonElements = radioButtons.map(({ label, value }) => (
    <RadioButton
      key={value}
      label={label}
      value={value}
      method={method}
      onChange={onChange}
    />
  ));
  return <>{radioButtonElements}</>;
};

RadioButton.propTypes = {
  radioButtons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired
};

export default RadioButtons;
