import React, { Component } from 'react';

// contexts
import { ApiContext } from './../../context/ApiContext/ApiContext';

// styles
import styles from './SearchBar.module.css';

class SearchBar extends Component {
  static contextType = ApiContext;

  handleSubmit = (e) => {
    e.preventDefault();
    const { getRequest} = this.context;

    getRequest();
  }

  handleChange = (e) => {
    const { setApi} = this.context;
    const value = e.target.value;
    setApi(value);
  }

  render () {
    const { api } = this.context;
    return (
      <form
        className={styles.form}
        onSubmit={this.handleSubmit}
      >
      <input
        className={styles.input}
        type="text"
        value={api}
        onChange={this.handleChange}
      />
      <input type="submit" value="Search" />
      </form>
    )
  }
}

export default SearchBar;
