import { useState } from 'react';
import { toast } from 'react-toastify';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';

import css from './Searchbar.module.css';

const Searchbar = ({ onFormSubmit }) => {
  const [image, setImage] = useState('');

  const hendelImagesChange = event => {
    setImage(event.currentTarget.value.toLowerCase());
  };
  const hendelSubmit = event => {
    event.preventDefault();
    if (image.trim() === '') {
      return toast.error('Please enter a name to search!');
    }
    onFormSubmit(image);
    setImage('');
  };
  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={hendelSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <SearchIcon />
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          autoFocus
          placeholder="Search images and photos"
          onChange={hendelImagesChange}
          value={image}
        />
      </form>
    </header>
  );
};
export default Searchbar;