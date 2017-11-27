import React from 'react';
import Template from './Template';
import VideoEmbed from '../components/VideoEmbed';

export default class Video extends React.Component {
  render() {
    const videoID = this.props.match.params.id;

    return (
      <Template>
        <div className='Video'>
          <VideoEmbed id={ videoID } />
        </div>
      </Template>
    );
  }
}
