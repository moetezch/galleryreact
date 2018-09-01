import axios from 'axios'
import { FETCH_IMAGES } from './types'
const API_KEY=""
export const fetchImages = (page) => async (dispatch) => {
  const res = await axios.get(`https://api.unsplash.com/photos/?client_id=${API_KEY}&page=${page}`)
  dispatch({ type: FETCH_IMAGES, payload: res.data })
}
