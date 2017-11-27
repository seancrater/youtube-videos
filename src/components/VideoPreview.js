import React from 'react';

export default class VideoPreview extends React.Component {
  render() {
    const { data } = this.props;
    const { id, snippet } = data;

    return (
      <div className='VideoPreview'>
        <a href={`/video/${ id.videoId }`}>
          <h3 className='Video__title'>{ snippet.title }</h3>
          <p className='Video__channel'>{ snippet.channelTitle }</p>
        </a>
      </div>
    );
  }
}
