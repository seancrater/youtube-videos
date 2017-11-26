import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Video from '../views/Video';
import VideoList from '../views/VideoList';

export default () => (
  <Switch>
    <Route exact path='/' component={ VideoList } />
    <Route path='/video/:id' component={ Video } />
  </Switch>
);
