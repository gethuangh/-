// pages/views/area/area.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    brief:false
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

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  // 输入框是否显示
  briefShow: function (e) {
    if (e.currentTarget.dataset.index == this.data.indexs) {
      this.setData({
        indexs:9999999999999999
      })
    } else {
      this.setData({
        indexs:e.currentTarget.dataset.index
      })
    }
    console.log(this.data.indexs)
  },

  // 去商铺详情
  toShopDetails: function () { 
   
    wx.navigateTo({
      url: '../shopDetails/shopDetails?id=1'
   })
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