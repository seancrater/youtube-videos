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
      console.log(action);
      state = { ...state, status: 'error', error: action.payload };
      break;
    case GET_VIDEOS_SUCCESS:
      const { items, nextPageToken, prevPageToken } = action.payload;
      state = {
        ...state,
        nextPage: nextPageToken ? nextPageToken : null,
        prevPage: prevPageToken ? prevPageToken : null,
        status: 'success',
        videos: items
      };

      action.query ? state.query = action.query : null;

      break;
  }

  return state;
};
