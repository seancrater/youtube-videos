import { getComments } from '../actions/comments';
import Comments from '../components/Comments';
import React from 'react';
import { connect } from 'react-redux';
import Template from './Template';
import VideoEmbed from '../components/VideoEmbed';

class Video extends React.Component {
  componentWillMount() {
    const { dispatch, match } = this.props;
    dispatch(getComments(match.params.id))
  }

  render() {
    const { comments, match } = this.props;

    return (
      <Template>
        <div className='Video'>
          <VideoEmbed id={ match.params.id } />
          { comments.status === 'success' ? <Comments comments={ comments.items } /> : '' }
        </div>
      </Template>
    );
  }
}

export default connect(state => {
  return {
    comments: state.comments
  };
})(Video);
