import { Component } from 'react';

import Searchbar from './Searchbar';

export class App extends Component {
  state = {
    images: [],
    request: '',
    isLoading: false,
    error: null,
  };

  handleSubmit = request => {
    this.setState({ request });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
