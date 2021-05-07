import axios from 'axios'

export const KEY = 'AIzaSyAJSL5K4SKH1YKsXNbn9tSO8FAMs5Kb7-E'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});