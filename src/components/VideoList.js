import React from 'react';
import { getVideos } from '../actions/videos';

export default class VideoList extends React.Component {
  componentWillMount() {
    this.props.dispatch(getVideos({ query: 'surf' }));
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}
