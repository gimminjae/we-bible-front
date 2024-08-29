import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import util from "../util/util"

export const api = {
  post,
  get,
  put,
  remove,
  head,
}
// const baseURL = process.env.REACT_APP_BO_API_URL
const instance = axios.create()
// instance.interceptors.request.use(
//   async (config: any) => {
//     config.withCredentials = true
//   },
//   (error) => {
//     alert("error 발생")
//   }
// )

function post(url: string, data = {}) {
  return instance.post(url, data).then((response) => response.data)
}

function get(url: string, data?: any) {
  return instance
    .get(`${url}${data ? util.makeSearchParam(data) : ""}`)
    .then((response) => response.data)
}

function put(url: string, data = {}) {
  return instance.put(url, data).then((response) => response.data)
}

function remove(url: string, data = {}) {
  return instance
    .delete(`${url}${util.makeSearchParam(data)}`)
    .then((response) => response.data)
}

function head(url: string, data = {}) {
  return instance.head(url, data).then((response) => response.data)
}

const useApi = ({ api, onSuccess, onError, onComplete }: any) => {
  const [data, setData] = useState()
  const navigate = useNavigate()

  const callApi = (params: any) =>
    api(params)
      .then((res: any) => {
        const result = res.data ? res.data : res
        setData(result)
        if (onSuccess) onSuccess(result, params)
        return result
      })
      .catch((err: any) => {
        if (err.response?.status === 401) {
          navigate("/")
          // dispatch(logout())
        }
        if (onError) onError(err)
      })
      .finally(() => {
        if (onComplete) onComplete()
      })

  return {
    callApi,
    data,
  }
}

export default useApi
