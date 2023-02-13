import { Component } from 'react';
import { fetchImages } from './api';
import { AppWrapper, Message } from './App.styled';
import Button from './Button';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Modal from './Modal';

import Searchbar from './Searchbar';

export class App extends Component {
  state = {
    images: [],
    request: '',
    page: 1,
    isLoading: false,
    totalHits: 0,
    error: null,
    message: 'Please, enter your request',
    isModalOpen: false,
    largeImageUrl: '',
  };

  handleSubmit = request => {
    this.setState({
      request,
      page: 1,
      images: [],
    });
  };

  handleClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleModalToggle = largeImageUrl => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
      largeImageUrl,
    }));
  };

  async componentDidUpdate(_, prevState) {
    const { request, page } = this.state;
    if (!request) {
      return;
    }
    if (prevState.request !== request || prevState.page !== page) {
      try {
        this.setState({ isLoading: true });
        const resp = await fetchImages(request, page);
        const { totalHits, hits: images } = resp;
        if (images.length === 0) {
          this.setState({
            message:
              'Sorry, there are no photos for you request. Please, try another one.',
          });
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          totalHits,
        }));
      } catch (error) {
        this.setState({
          error: 'Sorry, something went wrong. Please, try again.',
        });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    const {
      images,
      error,
      message,
      isLoading,
      isModalOpen,
      largeImageUrl,
      totalHits,
    } = this.state;

    const calcIsLastPage = images.length / totalHits;
    return (
      <AppWrapper>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} modalToggle={this.handleModalToggle} />
        {calcIsLastPage < 1 && <Button onClick={this.handleClick} />}
        {isModalOpen && (
          <Modal
            largeImageUrl={largeImageUrl}
            modalToggle={this.handleModalToggle}
          />
        )}
        {isLoading && <Loader />}
        {error !== null && <Message>{error}</Message>}
        {error === null && images.length === 0 && <Message>{message}</Message>}
      </AppWrapper>
    );
  }
}
