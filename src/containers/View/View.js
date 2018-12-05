import React, { Component } from 'react';

// styles
import styles from './View.module.css';

// contexts
import { ApiContext, testApis } from './../../context/ApiContext/ApiContext';

// components
import List from './../../components/List/List';
import ResponseList from './../../components/ResponseList/ResponseList';

class View extends Component {
  static contextType = ApiContext;

  render () {
    const { response } = this.context;
    const { view } = this.props;
    return (
      <div className={styles.row}>
        <div className={styles.apiList}>
          <List testApis={testApis} />
        </div>
        <div className={styles.responseList}>
          <h1>Response Items {response.length}</h1>
          <ResponseList
            view={view}
            response={response}
          />
        </div>
      </div>
    )
  }
}

export default View;
