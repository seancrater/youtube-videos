import React from 'react';

export default class VideoList extends React.Component {
  renderVideos() {
    const { videos } = this.props;

  }

  render() {
    return (
      <div className={ `VideoList` }>
        { this.renderVideos() }
      </div>
    );
  }
}
