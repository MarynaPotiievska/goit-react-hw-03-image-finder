import { Component } from 'react';

import Searchbar from './Searchbar';

export class App extends Component {
  state = {
    images: [],
    request: '',
    isLoading: false,
    error: null,
  };

  handleSubmit = () => {};

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
