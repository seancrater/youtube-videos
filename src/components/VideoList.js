import Banner from './Banner';
import React from 'react';
import Video from './Video';

export default class VideoList extends React.Component {
  renderVideos() {
    const { videos } = this.props;

    if( videos.status === 'success' ) {
      return videos.videos.map((video, index) =>
        <Video data={ video } key={ index } />
      );
    } else {
      return <Banner type='error' />
    }
  }

  render() {
    return (
      <div className={ `VideoList` }>
        { this.renderVideos() }
      </div>
    );
  }
}
