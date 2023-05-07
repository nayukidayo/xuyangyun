// pages/index/index.js
const app = getApp()

Page({
  data: {
    key: '0',
  },

  onLoad(opts) {
    if (opts?.type === 'login') return
    try {
      const auth = wx.getStorageSync('auth')
      if (auth.username !== app.globalData.username || auth.password !== app.globalData.password) {
        throw new Error('Authentication failed')
      }
    } catch (_) {
      wx.redirectTo({ url: '/pages/login/index' })
    }
  },

  onActive(e) {
    wx.showToast({ title: '加载中', icon: 'loading', mask: true, duration: 200 })
    this.setData({ key: e.currentTarget.dataset.key })
    setTimeout(() => this.setData({ key: '0' }), 100)
  },

  onWenDu() {
    wx.showModal({
      title: '温度设定',
      editable: true,
      placeholderText: '16 - 30 ℃',
    })
  },

  onPinLv() {
    wx.showModal({
      title: '频率设定',
      editable: true,
      placeholderText: '0 - 50 Hz',
    })
  },
})
