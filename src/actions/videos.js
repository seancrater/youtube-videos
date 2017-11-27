import axios from 'axios';
import {
  GET_VIDEOS,
  GET_VIDEOS_ERROR,
  GET_VIDEOS_SUCCESS
} from '../constants/actions';
import { API_KEY } from '../constants/api';

export const getVideos = options => {
  return dispatch => {
    dispatch({ type: GET_VIDEOS });

    const DEFAULT_OPTIONS = `&maxResults=10&part=snippet&type=video`,
          PAGE = options && options.page ? `&pageToken=${ options.page }` : '',
          QUERY = options && options.query ? options.query : '';

    axios.get(`https://www.googleapis.com/youtube/v3/search?key=${ API_KEY }&q=surf + ${ QUERY + PAGE + DEFAULT_OPTIONS }`)
      .then(response => {
        dispatch({ type: GET_VIDEOS_SUCCESS, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: GET_VIDEOS_ERROR, payload: err });
      })
  }
};
