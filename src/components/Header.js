import React from 'react';
import Logo from './Logo';
import SearchBox from './SearchBox';

export default class Header extends React.Component {
  render() {
    const { dispatch, history } = this.props;

    return (
      <header className='Header'>
        <Logo />
        <SearchBox dispatch={ dispatch } history={ history } />
      </header>
    );
  }
}
