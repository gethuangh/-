// pages/views/my/my.js
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
  // 去消费回馈
  toConsumeFeedbck: function () {

    wx.navigateTo({
      url: '../consumeFeedback/consumeFeedback?id=1'
    })
  },
  // 去我的钱包
  toMyWallet: function () {

    wx.navigateTo({
      url: '../myWallet/myWallet?id=1'
    })
  },
  // 去设置
  toSetUser: function () {

    wx.navigateTo({
      url: '../setUser/setUser?id=1'
    })
  },
  // 去库存积分
  toRepertory: function () {
    wx.navigateTo({
      url: '../repertoryInteg/repertoryInteg?id=1'
    })
  },

  // 去提现记录
  toTxRecord: function () {
    wx.navigateTo({
      url: '../txRecord/txRecord?id=1'
    })
  },

  // 去消费记录
  toExpenseRecord: function () {
    wx.navigateTo({
      url: '../expenseRecord/expenseRecord?id=1'
    })
  },
  // 去我的成员
  toMyMember: function () {
    wx.navigateTo({
      url: '../myMember/myMember?id=1'
    })
  },
  // 去我的收藏
  toMySc: function () {
    wx.navigateTo({
      url: '../mySc/mySc?id=1'
    })
  },
  // 去我的收藏
  toYqyl: function () {
    wx.navigateTo({
      url: '../yqyl/yqyl?id=1'
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