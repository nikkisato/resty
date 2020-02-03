import React from 'react';
import propTypes from 'prop-types';
import styles from './History.css';

export default function History({ history }) {
  const historyListItems = history.map(link => {
    <li key={link}>
      {link}
    </li>;
  });

  return (
    <div className={styles.history}>
      <h2>History Section</h2>
      <ul className={styles.historyList}>
        {historyListItems}
      </ul>


    </div>
  );
}

History.propType = {
  history: propTypes.array.isRequired
};
