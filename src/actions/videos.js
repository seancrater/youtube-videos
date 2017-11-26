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

    const OFFSET = options.offset ? options.offset : '',
          QUERY = options.query ? options.query : '';

    axios.get(`https://www.googleapis.com/youtube/v3/search?key=${ API_KEY }&part=snippet&type=video&q=${ QUERY }`)
      .then(response => {
        dispatch({ type: GET_VIDEOS_SUCCESS, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: GET_VIDEOS_ERROR, payload: err });
      })
  }
};
