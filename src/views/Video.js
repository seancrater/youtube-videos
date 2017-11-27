import React from 'react';
import Template from './Template';

export default class Video extends React.Component {
  render() {
    const videoID = this.props.match.params.id;

    return (
      <Template>
        <div className='Video'>
          <h1>
            { videoID }
          </h1>
        </div>
      </Template>
    );
  }
}
