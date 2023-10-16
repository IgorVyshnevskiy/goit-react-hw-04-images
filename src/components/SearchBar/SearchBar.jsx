import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';

import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    image: '',
  };

  hendelImagesChange = event => {
    this.setState({ image: event.currentTarget.value.toLowerCase() });
  };
  hendelSubmit = event => {
    event.preventDefault();
    if (this.state.image.trim() === '') {
      return toast.error('Please enter a name to search!');
    }
    this.props.onFormSubmit(this.state.image);
    this.setState({ image: '' });
  };
  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.hendelSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <SearchIcon />
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.hendelImagesChange}
            value={this.state.image}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;