import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ id, webUrl }) => {
  return (
    <GalleryItem>
      <GalleryItemImage src={webUrl} alt={id} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webUrl: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
