import React, { Component } from 'react';

// contexts
import { ApiContext, TEST_URL } from './../../context/ApiContext/ApiContext';

// styles
import btnStyles from './../../styles/button.module.css';

class ListItem extends Component {
  static contextType = ApiContext;

  render () {
    const { setApi } = this.context;
    const { label } = this.props;

    return (
      <li onClick={() => setApi(`${TEST_URL}${label}`) }>
        <button className={btnStyles.btn}>
          {label}
        </button>
      </li>
    )
  }
}

export default ListItem;
