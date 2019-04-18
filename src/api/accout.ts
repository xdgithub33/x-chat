import { axiosAjax } from './common'

export default {
  login(data: any) {
    return axiosAjax('/users/login', 'Post', {
      data: data,
    })
  },
}
