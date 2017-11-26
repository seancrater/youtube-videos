import { getVideos } from '../actions/videos';
import SearchBox from '../components/SearchBox';
import VideoList from '../components/VideoList';
import React from 'react';
import { connect } from 'react-redux';
import '../stylesheets/styles.scss';

class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(getVideos());
  }

  render() {
    const { dispatch, videos } = this.props;

    return (
      <div className={ `App` }>
        <SearchBox />
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
