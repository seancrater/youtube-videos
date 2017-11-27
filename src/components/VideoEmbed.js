import React from 'react';

export default class VideoEmbed extends React.Component {
  render() {
    const { id } = this.props;

    return (
      <iframe
        className="VideoEmbed"
        frameBorder='0'
        height="100%"
        width="100%"
        src={`https://www.youtube.com/embed/${ id }`}
        type='text/html'
      />
    );
  }
}
