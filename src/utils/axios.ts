import axios from 'axios'
import dotenv from 'dotenv'
import Cookies from 'js-cookie'
// import Cookies from 'js-cookie'
dotenv.config()

export const instance = axios.create({
  baseURL: 'http://localhost:1234',
  timeout: 1000
})
export const instanceHeader = axios.create({
  baseURL: 'https://be-olc-48e296d9338f.herokuapp.com',
  headers: {
    Authorization: `${Cookies.get('token')}`
  }
})
