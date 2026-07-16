import http from '@/utils/request'
import store from '@/store'

const api = {
  user: {
    login: (data) => {
      return http.post('/user/login', data).then(res => {
        // 登录成功后存储 token 到 vuex
        if (res && res.token) {
          store.commit('$tStore', {
            name: 'vuex_token',
            value: res.token
          })
        }
        return res
      })
    },
    register: (data) => http.post('/user/register', data),
    info: () => http.get('/user/info'),
    update: (data) => http.put('/user/update', data),
    logout: () => {
      // 登出时清除 token
      store.commit('$tStore', {
        name: 'vuex_token',
        value: ''
      })
      return Promise.resolve()
    }
  },
  
  circle: {
    list: (data) => http.get('/circle/list', data),
    detail: (id) => http.get(`/circle/detail/${id}`),
    create: (data) => http.post('/circle/create', data),
    join: (id) => http.post(`/circle/join/${id}`)
  },
  
  activity: {
    list: (data) => http.get('/activity/list', data),
    detail: (id) => http.get(`/activity/detail/${id}`),
    participate: (id) => http.post(`/activity/participate/${id}`)
  },
  
  preferred: {
    productList: (data) => http.get('/preferred/product/list', data),
    productDetail: (id) => http.get(`/preferred/product/detail/${id}`),
    redeem: (data) => http.post('/preferred/redeem', data),
    orderList: (data) => http.get('/preferred/order/list', data),
    orderDetail: (id) => http.get(`/preferred/order/detail/${id}`)
  },
  
  mine: {
    collectList: (data) => http.get('/mine/collect/list', data),
    messageList: (data) => http.get('/mine/message/list', data),
    integral: () => http.get('/mine/integral'),
    signed: () => http.post('/mine/signed')
  }
}

export default api