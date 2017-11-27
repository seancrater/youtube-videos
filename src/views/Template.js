import React from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import '../stylesheets/styles.scss';

class Template extends React.Component {
  render() {
    const { children, dispatch } = this.props;

    return (
      <div>
        <SearchBox dispatch={ dispatch } />
        { React.cloneElement(this.props.children, { ...this.props }) }
      </div>
    );
  }
}

export default connect(state => {
  return {
    videos: state.videos
  };
})(Template);
