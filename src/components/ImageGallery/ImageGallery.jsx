import ImageGalleryItem from 'components/ImageGalleryItem';
import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';

const ImageGallery = ({ images }) => {
  return (
    <Gallery>
      {images.map(image => {
        const { id, webformatURL } = image;
        return <ImageGalleryItem key={id} id={id} webUrl={webformatURL} />;
      })}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGallery;
