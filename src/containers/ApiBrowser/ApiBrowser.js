import React, { Component } from 'react';
import { ApiContext } from './../../context/ApiContext/ApiContext';

// containers
import View from './../../containers/View/View';

// components
import SearchBar from './../../components/SearchBar/SearchBar';
import ToggleView from './../../components/ToggleView/ToggleView';

class ApiBrowser extends Component {
  static contextType = ApiContext;

  state = {
    view: 'grid'
  }

  toggleView = () => {
    this.setState(prevState => ({ view: prevState.view === 'list' ? 'grid' : 'list'}));
  }

  render () {
    const { error } = this.context;

    return (
      <div>
        <SearchBar />
        <p>{error}</p>
        <ToggleView
          view={this.state.view}
          toggleView={this.toggleView}
        />
        <View view={this.state.view} />
      </div>
    )
  }
}

export default ApiBrowser;
