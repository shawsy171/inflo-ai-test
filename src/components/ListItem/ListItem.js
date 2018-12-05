import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { ApiContext, TEST_URL } from './../../context/ApiContext/ApiContext';
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

// ListItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   index: PropTypes.number.isRequired,
// }

export default ListItem;
