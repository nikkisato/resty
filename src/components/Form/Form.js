import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';
import RadioButtons from '../radio/RadioButtons';



const Form = ({ onSubmit, onChange, URL, method }) => (

  <>
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.container}>
        <input type="text" onChange={onChange}  name="URL" placeholder="URL" value={URL} />
        <div id="methods" className={styles.buttons}>
          <RadioButtons onChange={onChange} method={method}/>
          <button>GO!</button>
        </div>
        <br></br>
        <textarea onChange={onChange} name="reqBody"  placeholder="RAW JSON BODY"></textarea>
      </div>
    </form>
  </>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  URL: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  reqBody: PropTypes.string.isRequired,
};

export default Form;
