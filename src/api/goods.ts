import { axiosAjax } from './common'

export default {
  getGoodsList(params: any) {
    return axiosAjax('/goods/list', 'Get', {
      params: params,
    })
  },
}
