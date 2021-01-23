// pages/views/myWallet/myWallet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  // 去白积分获取记录
  toWhiteGetRecord: function () {
    wx.navigateTo({
      url: '../whiteGetrecord/whiteGetrecord?id=1'
    })
  },
  // 去红积分转账记录
  toRedGetRecord: function () {
    wx.navigateTo({
      url: '../redGetRecord/redGetRecord?id=1'
    })
  },
  // 去提现记录
  toTxRecord: function () {
    wx.navigateTo({
      url: '../txRecord/txRecord?id=1'
    })
  },
  // 去转账页面
  toTransferPost() {
    wx.navigateTo({
      url: '../transferPost/transferPost?id=1'
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})