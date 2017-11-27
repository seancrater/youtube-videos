import React from 'react';

export default class VideoPreview extends React.Component {
  render() {
    const { data } = this.props;
    const { id, snippet } = data;

    return (
      <div className='VideoPreview'>
        <a href={`/video/${ id.videoId }`}>
          <img
            alt={`${ snippet.title } | ${ snippet.channelTitle }`}
            className='VideoPreview__image'
            src={ snippet.thumbnails.medium.url }
          />
          <h3 className='VideoPreview__title'>{ snippet.title }</h3>
        </a>
        <p className='VideoPreview__description'>{ snippet.description }</p>
        <p className='VideoPreview__channel'>{ snippet.channelTitle }</p>
      </div>
    );
  }
}
