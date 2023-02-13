import PropTypes from 'prop-types';

import { BsSearch } from 'react-icons/bs';

import {
  SearchbarBox,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const { request } = e.target.elements;
    if (request.value.trim() === '') {
      return alert('Please, enter your request');
    }
    onSubmit(request.value);
  };

  return (
    <SearchbarBox>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <span>
            <BsSearch />
          </span>
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          name="request"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarBox>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
