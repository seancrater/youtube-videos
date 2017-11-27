import { getVideos } from '../actions/videos';
import React from 'react';
import { Redirect } from 'react-router';

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = () => {
      const { dispatch } = this.props;
      const { value } = this.searchInput;

      dispatch(getVideos({
        page: null,
        query: value
      }));
      return <Redirect push to="/" />;
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
