import ImageGalleryItem from 'components/ImageGalleryItem';
import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';

const ImageGallery = ({ images, modalToggle }) => {
  return (
    <Gallery>
      {images.map(image => {
        const { id, webformatURL, largeImageURL } = image;
        return (
          <ImageGalleryItem
            key={id}
            id={id}
            webUrl={webformatURL}
            largeUrl={largeImageURL}
            modalToggle={modalToggle}
          />
        );
      })}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  modalToggle: PropTypes.func.isRequired,
};

export default ImageGallery;
