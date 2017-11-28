import React from 'react';

export default class Comments extends React.Component {
  renderComments(comments) {
    return comments.map(comment => {
      const { snippet } = comment;
      const single = snippet.topLevelComment.snippet;
      console.log(single);

      return (
        <div className='Comments--single'>
          <img
            alt={ single.authorDisplayName }
            className='Comment__image'
            src={ single.authorProfileImageUrl }
          />
          <a className='Comment__author' href={ single.authorChannelUrl }>{ single.authorDisplayName }</a>
          <p className='Comment__text'>{ single.textOriginal }</p>
          <p className='Comment__date'>{ single.publishedAt }</p>
        </div>
      );
    });
  }

  render() {
    const { comments } = this.props;

    return (
      <div className='Comments'>
        { this.renderComments(comments) }
      </div>
    );
  }
}
