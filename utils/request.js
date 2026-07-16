const BASE_URL = 'https://api.example.com'

// 引入 store 以获取 token
import store from '@/store'

const request = (options) => {
  return new Promise((resolve, reject) => {
    // 从 vuex 获取 token
    const token = store.state.vuex_token

    uni.request({
      url: BASE_URL + options.url,
      method: options.method || 'GET',
      data: options.data || {},
      header: options.header || {
        'Content-Type': 'application/json',
        'token': token
      },
      timeout: options.timeout || 10000,
      success: (res) => {
        if (res.statusCode === 200) {
          const data = res.data
          if (data.code === 0) {
            resolve(data.data)
          } else if (data.code === 401) {
            // 清除 vuex 中的 token
            store.commit('$tStore', {
              name: 'vuex_token',
              value: ''
            })
            uni.navigateTo({ url: '/minePages/login' })
            reject(data.message || '登录已过期')
          } else {
            uni.showToast({ title: data.message || '请求失败', icon: 'none' })
            reject(data.message || '请求失败')
          }
        } else {
          uni.showToast({ title: '网络错误', icon: 'none' })
          reject('网络错误')
        }
      },
      fail: (err) => {
        uni.showToast({ title: '请求失败', icon: 'none' })
        reject(err)
      },
      complete: () => {
        if (options.loading !== false) {
          uni.hideLoading()
        }
      }
    })
  })
}

const http = {
  get(url, data = {}, options = {}) {
    return request({ url, method: 'GET', data, ...options })
  },
  post(url, data = {}, options = {}) {
    return request({ url, method: 'POST', data, ...options })
  },
  put(url, data = {}, options = {}) {
    return request({ url, method: 'PUT', data, ...options })
  },
  delete(url, data = {}, options = {}) {
    return request({ url, method: 'DELETE', data, ...options })
  }
}

export default http