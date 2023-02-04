import { Component } from 'react';
import { fetchImages } from './api';
import ImageGallery from './ImageGallery';

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

  // gettingImages = async () => {

  // };

  async componentDidUpdate(_, prevState) {
    if (prevState.request !== this.state.request) {
      try {
        const { request } = this.state;
        let page = 1;
        this.setState(prevState => ({ isLoading: !prevState.isLoading }));
        const images = await fetchImages(request, page);
        // console.log(images);
        this.setState({ images });
      } catch {
      } finally {
        this.setState(prevState => ({ isLoading: !prevState.isLoading }));
      }
    }
  }

  render() {
    const { images } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
      </div>
    );
  }
}
