import { Component } from 'react';
import { fetchImages } from './api';
import { AppWrapper, Message } from './App.styled';
import Button from './Button';
import ImageGallery from './ImageGallery';
import Loader from './Loader';

import Searchbar from './Searchbar';

export class App extends Component {
  state = {
    images: [],
    request: '',
    page: 1,
    isLoading: false,
    error: null,
    message: 'Please, enter your request',
  };

  handleSubmit = request => {
    this.setState({
      request,
      page: 1,
    });
  };

  handleClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  async componentDidUpdate(_, prevState) {
    const { request, page } = this.state;
    if (prevState.request !== request || prevState.page !== page) {
      try {
        const { request, page } = this.state;
        this.setState(prevState => ({ isLoading: !prevState.isLoading }));
        const images = await fetchImages(request, page);
        if (images.length === 0) {
          this.setState({
            message:
              'Sorry, there are no photos for you request. Please, try another one.',
          });
        }
        this.setState({ images });
      } catch (error) {
        this.setState({
          error: 'Sorry, something went wrong. Please, try again.',
        });
      } finally {
        this.setState(prevState => ({ isLoading: !prevState.isLoading }));
      }
    }
  }

  render() {
    const { images, error, message, isLoading } = this.state;
    return (
      <AppWrapper>
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading && <Loader />}
        {error !== null && <p>{error}</p>}
        {error === null && images.length === 0 && <Message>{message}</Message>}
        {!isLoading && <ImageGallery images={images} />}
        {images.length !== 0 && <Button onClick={this.handleClick} />}
      </AppWrapper>
    );
  }
}
