import React from 'react';

export default class Comments extends React.Component {
  renderComments(comments) {
    return comments.map((comment, index) => {
      const { snippet } = comment;
      const single = snippet.topLevelComment.snippet;
      const dateFormatted = new Date(single.publishedAt).toLocaleString().replace(',', '');

      return (
        <div className='Comments--single' key={ index }>
          <img
            alt={ single.authorDisplayName }
            className='Comment__image'
            src={ single.authorProfileImageUrl }
          />
          <a className='Comment__author' href={ single.authorChannelUrl }>{ single.authorDisplayName }</a>
          <p className='Comment__text'>{ single.textOriginal }</p>
          <p className='Comment__date'>{ dateFormatted }</p>
        </div>
      );
    });
  }

  render() {
    const { comments } = this.props;

    return (
      <div className='Comments'>
        <h3 className='Comments__title'>Latest Comments</h3>
        { this.renderComments(comments) }
      </div>
    );
  }
}
