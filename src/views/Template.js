import React from 'react';
import SearchBox from '../components/SearchBox';
import '../stylesheets/styles.scss';

export default class Template extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <SearchBox />
        { children }
      </div>
    );
  }
}
