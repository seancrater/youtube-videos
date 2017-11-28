import comments from './comments';
import { combineReducers } from 'redux';
import videos from './videos';

const rootReducer = combineReducers({
  comments,
  videos
});

export default rootReducer;
