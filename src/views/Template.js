import Pagination from '../components/Pagination';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchBox from '../components/SearchBox';
import '../stylesheets/styles.scss';

class Template extends React.Component {
  render() {
    const { children, dispatch, history, match, videos } = this.props;

    return (
      <div>
        <SearchBox dispatch={ dispatch } history={ history } />
        { React.cloneElement(this.props.children, { ...this.props }) }
        { match.path === '/' ? <Pagination dispatch={ dispatch } state={ videos } /> : null }
      </div>
    );
  }
}

export default withRouter(connect(state => {
  return {
    videos: state.videos
  };
})(Template));
