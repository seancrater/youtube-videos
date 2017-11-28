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

  renderVideos(videos) {
    if( videos.status === 'success' ) {
      return videos.videos.map((video, index) =>
        <VideoPreview data={ video } key={ index } />
      );
    }
  }

  render() {
    const { videos } = this.props;

    return (
      <Template>
        <div>
          { videos.status !== 'success' ? <Banner type={ videos.status } /> : null }
          <div className='VideoList'>
            { this.renderVideos(videos) }
          </div>
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
