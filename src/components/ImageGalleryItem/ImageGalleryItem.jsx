import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ id, webUrl, largeUrl, modalToggle }) => {
  return (
    <GalleryItem onClick={() => modalToggle(largeUrl)}>
      <GalleryItemImage src={webUrl} alt={id} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webUrl: PropTypes.string.isRequired,
  largeUrl: PropTypes.string.isRequired,
  modalToggle: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
