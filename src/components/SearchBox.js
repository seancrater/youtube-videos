import { getVideos } from '../actions/videos';
import React from 'react';

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = () => {
      const { dispatch, history } = this.props;
      const { value } = this.searchInput;

      // Resetting page and setting new query
      dispatch(getVideos({
        page: null,
        query: value
      }));

      // Returning to the homepage to render new options
      history.push('/');
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
