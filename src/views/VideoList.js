import { getVideos } from '../actions/videos';
import Banner from '../components/Banner';
import React from 'react';
import { connect } from 'react-redux';
import Template from './Template';
import VideoPreview from '../components/VideoPreview';

class VideoList extends React.Component {
  componentWillMount() {
    const beachBoys = {
      query: 'in usa'
    };

    this.props.dispatch(getVideos(beachBoys));
  }

  renderVideos() {
    const { videos } = this.props;

    if( videos.status === 'success' ) {
      return videos.videos.map((video, index) =>
        <VideoPreview data={ video } key={ index } />
      );
    } else {
      return <Banner type={ videos.status } />
    }
  }

  render() {
    return (
      <Template>
        <div className='VideoList'>
          { this.renderVideos() }
        </div>
      </Template>
    );
  }
}

export default connect(state => {
  return {
    videos: state.videos
  };
})(VideoList);
