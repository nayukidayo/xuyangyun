// pages/login/index.js
const app = getApp()

Page({
  onReady() {
    wx.hideHomeButton()
  },

  onSubmit(e) {
    const auth = e.detail.value
    wx.showToast({ title: '加载中', icon: 'loading', mask: true })
    setTimeout(() => {
      if (auth.username !== app.globalData.username || auth.password !== app.globalData.password) {
        wx.showToast({ title: '认证失败', icon: 'error', duration: 2000 })
        return
      }
      if (auth.remember.length) {
        try {
          wx.setStorageSync('auth', auth)
        } catch (err) {
          console.log(err)
        }
      }
      wx.redirectTo({ url: '/pages/index/index?type=login' })
    }, 200)
  },
})
