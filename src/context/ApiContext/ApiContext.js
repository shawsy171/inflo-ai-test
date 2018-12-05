import React, { createContext, Component } from 'react';

export const ApiContext = createContext();

export const testApis = ['posts', 'todos', 'users', 'albums']
export const TEST_URL = 'https://jsonplaceholder.typicode.com/';

class ApiProvider extends Component {
  state = {
    api: 'Hello2',
    response: [],
    error: 'No Errors'
  }

  getRequest = () => {
    const { api } = this.state;
    fetch(api.trim())
      .then(data => data.json())
      .then(response => {
        this.setState(() => ({ response, error: 'No Errors' }));
      })
      .catch(error => {
        console.error('error', error.message);
        this.setState(() => ({ error: error.message }));
      })
  }

  setApi = (apiValue) => {
    this.setState(() => ({ api: apiValue }));
  }

  render () {
    const { api } = this.state;

    return (
      <ApiContext.Provider
        value={{
          getRequest: this.getRequest,
          setApi: this.setApi,
          response: this.state.response,
          error: this.state.error,
          api: api
        }}
      >
        {this.props.children}
      </ApiContext.Provider>
    )
  }
}

export default ApiProvider;
