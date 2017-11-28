import { getVideos } from '../actions/videos';
import classNames from 'classnames';
import React from 'react';

export default class Pagination extends React.Component {
  renderButton(key) {
    const { dispatch, state } = this.props;
    const options = {
      page: state[key],
      query: state.query
    };

    if(state[key]) {
      return (
        <button
          className='Pagination__button'
          onClick={ () => dispatch(getVideos(options)) }
        >
          { key === 'nextPage' ? 'Next' : 'Previous' }
        </button>
      );
    }
  }

  render() {
    const { state } = this.props;

    const classes = {
      'Pagination': true
    };

    return (
      <div className={ classNames(classes) }>
        { this.renderButton('prevPage') }
        { this.renderButton('nextPage') }
      </div>
    );
  }
}
