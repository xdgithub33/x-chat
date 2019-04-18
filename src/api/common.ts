import axios from 'axios'

const axiosAjax = (url: any, method: any, options: any) => {
  const defaultOptions: any = {
    method: 'Get',
    baseURL: '/api',
    timeout: 5000,
    withCredentials: false,
  }
  const win: any = window
  if (url.indexOf('/users/login') === -1) {
    defaultOptions.headers = {
      'X-require-token': win.$cookies.get('login-token') || '',
    }
  }
  options = Object.assign(
    defaultOptions,
    {
      method: method || 'Get',
      url: url,
    },
    options || {},
  )

  return new Promise((resolve, reject) => {
    axios(options)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}
export { axiosAjax }
