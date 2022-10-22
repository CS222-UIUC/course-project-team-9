import axios from 'axios'

//works on https://jsonplaceholder.typicode.com but
export const api = axios.create({
  baseURL: 'http://localhose:8000/api',
})

export const getPosts = async() => {
  const response = await api.get('/posts')
  return response.data
}

