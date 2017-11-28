import React from 'react';
import { Link } from 'react-router-dom';

export default class Logo extends React.Component {
  render() {
    return (
      <Link to={`/`}>
        <h1 className='Header__logo'>SurfTube 🤙</h1>
      </Link>
    );
  }
}
