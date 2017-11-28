import axios from 'axios';
import {
  GET_COMMENTS,
  GET_COMMENTS_ERROR,
  GET_COMMENTS_SUCCESS
} from '../constants/actions';
import { API_KEY } from '../constants/api';

export const getComments = id => {
  return dispatch => {
    dispatch({ type: GET_COMMENTS });

    const COMMENT_OPTIONS = `&maxResults=20&part=snippet`;

    axios.get(`https://www.googleapis.com/youtube/v3/commentThreads?key=${ API_KEY + COMMENT_OPTIONS }&videoId=${ id }`)
      .then(response => {
        dispatch({ type: GET_COMMENTS_SUCCESS, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: GET_COMMENTS_ERROR, payload: err });
      });
  }
};
