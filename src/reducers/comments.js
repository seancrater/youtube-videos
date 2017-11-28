import {
  GET_COMMENTS,
  GET_COMMENTS_ERROR,
  GET_COMMENTS_SUCCESS
} from '../constants/actions';

export default (state = { status: 'pending' }, action) => {
  switch(action.type) {
    case GET_COMMENTS:
      state = { ...state, status: 'loading' };
      break;
    case GET_COMMENTS_ERROR:
      console.log(action);
      state = { ...state, status: 'error', error: action.payload, items: false };
      break;
    case GET_COMMENTS_SUCCESS:
      const { items } = action.payload;
      state = { ...state, items, status: 'success' }
      break;
  }

  return state;
};
