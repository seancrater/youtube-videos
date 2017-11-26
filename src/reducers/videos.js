import {
  GET_VIDEOS,
  GET_VIDEOS_ERROR,
  GET_VIDEOS_SUCCESS
} from '../constants/actions';

export default (state = { status: 'pending' }, action) => {
  switch(action.type) {
    case GET_VIDEOS:
      state = { ...state, status: 'loading' };
      break;
    case GET_VIDEOS_ERROR:
      state = { ...state, status: 'error', error: action.payload };
      break;
    case GET_VIDEOS_SUCCESS:
      state = { ...state, status: 'success', videos: action.payload };
      break;
  }

  return state;
};
