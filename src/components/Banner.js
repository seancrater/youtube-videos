import classNames from 'classnames';
import React from 'react';

export default class Banner extends React.Component {
  renderText(type) {
    switch(type) {
      case 'error':
        return 'Uh oh! Something seems to have gone wrong!';
        break;
    }
  }

  render() {
    const { type } = this.props;

    const classes = {
      'Banner': true,
      'Banner--error': type === 'error'
    };

    return (
      <p className={ classNames(classes) }>
        { this.renderText(type) }
      </p>
    );
  }
}
