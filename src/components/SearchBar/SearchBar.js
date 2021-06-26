import React, { Component } from 'react';
import styles from "./SearchBar.module.css";


class SearchBar extends Component {
    state = {
        query: ''
    }

    handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
      this.setState({ query: '' });
      
    };
    
    render() {
        return (
 <header className={styles.Searchbar}>
  <form  onSubmit={this.handleSubmit} className={styles.SearchForm}>
    <button type="submit" className={styles.SearchFormButton}>
      <span className={styles.SearchFormButtonLabel}>Search</span>
    </button>

    <input
      className={styles.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Movie searching"
      onChange={this.handleChange}
    />
  </form>
</header>
        )
    }


}

export default SearchBar;