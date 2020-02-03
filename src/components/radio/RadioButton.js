import React from 'react';
import PropTypes from 'prop-types';
import styles from './RadioButton.css';

const RadioButton = ({ method, label, value, onChange }) => (
  <div className={styles.RadioButton}>
    <input 
      id={styles.RadioButton} 
      type="radio" 
      name='method' 
      value={value} 
      onChange={onChange}/>
    <label htmlFor={value}>{label}</label>
  </div>
);

RadioButton.propTypes = {
  method: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};


export default RadioButton;
