import React from 'react';
import { connect } from 'react-redux';
import VideoList from '../components/VideoList';
import '../stylesheets/styles.scss';

class App extends React.Component {
  render() {
    const { dispatch, videos } = this.props;

    return (
      <div className={ `App` }>
        <VideoList
          dispatch={ dispatch }
          videos={ videos }
        />
      </div>
    );
  }
}

export default connect(state => {
  return {
    videos: state.videos
  };
})(App);
