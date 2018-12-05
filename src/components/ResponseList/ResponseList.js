import React from 'react';
import styles from './ResponseList.module.css';
import classnames from 'classnames';

const ResponseItem = ({ item, view }) => (
  <li className={classnames(styles.item, {[styles.gridItem]: view === 'list'})}>
    <pre>
      {JSON.stringify(item, null, 2)}
    </pre>
  </li>
)

const ResponseList = ({ view, response }) => {

  return (
    Array.isArray(response) ? (
      <ul className={view === 'list'? styles.grid : null}>
        {response.map((item, index) =>
          <ResponseItem key={index} item={item} view={view} />)}
      </ul>
    ) : (
      <div>
        <p>This is not an array</p>
        <h3>Raw Response</h3>
        <pre>
          {JSON.stringify(response, null, 2)}
        </pre>
      </div>
    )
  );
}

export default ResponseList;
