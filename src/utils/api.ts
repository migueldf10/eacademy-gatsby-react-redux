import axios from "axios"

const API = process.env.API_URL

export default function buildAxios(jwt) {
  return axios.create({
    baseURL: API,
    headers: jwt ? { Authorization: `Bearer ${jwt}` } : {},
  })
}
