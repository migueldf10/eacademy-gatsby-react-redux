import axios from "axios"

const API = "http://localhost:4000"

export default function buildAxios(jwt) {
  return axios.create({
    baseURL: API,
    headers: jwt ? { Authorization: `Bearer ${jwt}` } : {},
  })
}
