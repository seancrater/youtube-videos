import Banner from './Banner';
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
          <div className='Comment__body'>
            <a
              className='Comment__author'
              href={ single.authorChannelUrl }
              target='_blank'
            >
              { single.authorDisplayName }
            </a>
            <p className='Comment__text'>{ single.textOriginal }</p>
            <p className='Comment__date'>{ dateFormatted }</p>
          </div>
        </div>
      );
    });
  }

  render() {
    const { comments } = this.props;
    console.log(comments);

    return (
      <div className='Comments'>
        { comments ? <h3 className='Comments__title'>Latest Comments</h3> : null }
        { comments ? this.renderComments(comments) : <Banner type='no-comments' /> }
      </div>
    );
  }
}
