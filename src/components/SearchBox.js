import React from 'react';

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = () => {
      const { value } = this.searchInput;
      console.log(value);
    }
  }

  render() {
    return (
      <div className='SearchBox'>
        <input
          className='SearchBox__input'
          placeholder='Search Surf Videos'
          ref={ node => this.searchInput = node }
          type='text'
        />
        <button
          children='Search'
          className='SearchBox__button'
          onClick={ this.handleSubmit }
        />
      </div>
    );
  }
}
