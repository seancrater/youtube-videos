import classNames from 'classnames';
import React from 'react';

export default class Pagination extends React.Component {
  render() {
    const { next } = this.props;

    const classes = {
      'Pagination': true
    };

    return (
      <div className={ classNames(classes) }>
        { /* Buttons will go here */ }
      </div>
    );
  }
}
