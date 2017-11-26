import React from 'react';

export default class VideoPreview extends React.Component {
  render() {
    const { data } = this.props;
    const { id, snippet } = data;

    return (
      <div className='Video'>
        <a href={`https://www.youtube.com/watch?v=${ id.videoId }`} target='_blank'>
          <h3 className='Video__title'>{ snippet.title }</h3>
          <p className='Video__channel'>{ snippet.channelTitle }</p>
        </a>
      </div>
    );
  }
}
