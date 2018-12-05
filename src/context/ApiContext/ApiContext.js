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
    console.log('api.trim() 2', api.trim());
    fetch(api.trim())
      .then(data => data.json())
      .then(response => {
        this.setState(() => ({ response, error: 'No Errors' }));
      })
      .catch(error => {
        console.error('error', error.message);
        console.dir('error', error);
        this.setState(() => ({ error: error.message }));
      })
  }

  setApi = (apiValue) => {
    console.log('apiValue', apiValue);
    this.setState(() => ({ api: apiValue }));

    const { api } = this.state;
    console.log('api.trim() 1', api.trim());
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
