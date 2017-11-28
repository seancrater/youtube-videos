import React from 'react';
import { Link } from 'react-router-dom';

export default class Logo extends React.Component {
  render() {
    return (
      <Link className='Logo' to={`/`}>
        <h1 className='Logo__text'>SurfTube 🤙</h1>
      </Link>
    );
  }
}
