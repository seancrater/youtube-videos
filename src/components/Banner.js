import classNames from 'classnames';
import React from 'react';

export default class Banner extends React.Component {
  renderText(type) {
    let text;

    switch(type) {
      case 'error':
        text = 'Uh oh! Something seems to have gone wrong!';
        break;
      case 'loading':
        text = 'Results are loading...';
        break;
    }

    return text;
  }

  render() {
    const { type } = this.props;

    const classes = {
      'Banner': true,
      'Banner--error': type === 'error',
      'Banner--loading': type === 'loading'
    };

    return (
      <p className={ classNames(classes) }>
        { this.renderText(type) }
      </p>
    );
  }
}
