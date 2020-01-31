import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';
import RadioButton from '../radio/RadioButtons';


const Form = ({ handleSubmit, handleChange, URL }) => (
  <>
    <form className={styles.form} handleSubmit={handleSubmit}>
      <div className={styles.container}>
        <input type="text" onChange={handleChange}  name="URL" placeholder="URL" value={URL} />
        <div id="methods" className={styles.buttons}>
          <label>
            {' '}
            <input type="radio" onChange={handleChange} name="method" value="get" />
            <span>GET</span>
          </label>
          <label>
            {' '}
            <input type="radio"  onChange={handleChange} name="method" value="post" />
            <span>POST</span>
          </label>
          <label>
            {' '}
            <input type="radio"  onChange={handleChange} name="method" value="put" />
            <span>PUT</span>
          </label>
          <label>
            {' '}
            <input type="radio" onChange={handleChange} name="method" value="patch" />
            <span>PATCH</span>
          </label>
          <label> {' '}
            <input type="radio" onChange={handleChange} name="method" value="delete"/>
            <span>DELETE</span>
          </label>

          <button>GO!</button>
        </div>
        <br></br>
        <textarea onChange={handleChange} name="reqBody"  placeholder="RAW JSON BODY"></textarea>
      </div>
    </form>
  </>
);

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  URL: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  reqBody: PropTypes.string.isRequired,
};

export default Form;
