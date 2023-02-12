import PropTypes from 'prop-types';
import { ButtonWrapper, LoadMoreButton } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <ButtonWrapper>
      <LoadMoreButton type="button" onClick={onClick}>
        Load more
      </LoadMoreButton>
    </ButtonWrapper>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
