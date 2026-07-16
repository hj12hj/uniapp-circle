# Token 管理说明

## 概述
Token 现在存储在 Vuex 中，并自动持久化到本地存储。

## 修改内容

### 1. Vuex Store (store/index.js)
- 新增 `vuex_token` 状态
- 将 `vuex_token` 添加到持久化列表 `saveStateKeys`
- 应用启动时自动从本地恢复 token

### 2. HTTP 请求 (utils/request.js)
- 从 `store.state.vuex_token` 读取 token
- 401 错误时自动清除 vuex 中的 token

### 3. API 接口 (api/index.js)
- `user.login()` 登录后自动存储返回的 token
- 新增 `user.logout()` 方法清除 token

## 使用方式

### 登录
```javascript
// 在组件中调用
this.$api.user.login({
  phone: '13800138000',
  password: '123456'
}).then(res => {
  // token 已自动存储到 vuex
  uni.switchTab({ url: '/pages/index' })
})
```

### 获取 Token
```javascript
// 在组件中
const token = this.vuex_token

// 或在 JS 文件中
import store from '@/store'
const token = store.state.vuex_token
```

### 登出
```javascript
// 清除 token 并跳转到登录页
this.$api.user.logout().then(() => {
  uni.navigateTo({ url: '/minePages/login' })
})
```

### 检查登录状态
```javascript
// 在组件中
if (this.vuex_token) {
  // 已登录
} else {
  // 未登录
}
```

## 持久化机制
- `vuex_token` 会自动保存到本地存储 (key: `lifeData.vuex_token`)
- 应用重启时自动恢复
- 无需手动调用 `uni.setStorageSync`

## 注意事项
1. 登录接口返回的数据格式应为：`{ token: "xxx", ... }`
2. token 会在 401 错误时自动清除
3. 所有 API 请求会自动携带 token
4. 可通过 `this.vuex_token` 在任何组件中访问

## 优势
- ✅ 统一管理应用状态
- ✅ 自动持久化，无需手动操作
- ✅ 响应式更新，token 变化自动同步
- ✅ 便于调试和测试
