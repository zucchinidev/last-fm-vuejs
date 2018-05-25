import axios from 'axios'

export class HttpRepository {
  static get (url, params, config) {
    return axios.get(url, { params, ...HttpRepository.mergeConf(config) })
  }

  static put (url, params, config) {
    return axios.put(url, params, { ...HttpRepository.mergeConf(config) })
  }

  static post (url, data, config) {
    return axios.post(url, data, { ...HttpRepository.mergeConf(config) })
  }

  static patch (url, data, config) {
    return axios.patch(url, data, { ...HttpRepository.mergeConf(config) })
  }

  static mergeConf (config) {
    return {
      baseURL: process.env.URL_BASE_API,
      ...config
      // add here the default configuration, interceptors, etc
      // the order is very important (will be overwritten or not)!!!
    }
  }
}
