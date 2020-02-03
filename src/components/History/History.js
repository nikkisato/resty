import React from 'react';
import propTypes from 'prop-types';
import styles from './History.css';

export default function History({ history }) {
  const historyListItems = history.map((item, i) => {
    return <li key={i}>
      {item.URL}
      {item.method}
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

History.propTypes = {
  history: propTypes.array
};
