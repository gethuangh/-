// pages/views/transferPost/transferPost.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    popShow: false,
    text: ""
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
  // 输入框输入事件
  textFun(e) {
    // 把输入的值存起来
    this.data.text = e.detail.value
  },
  //点击提交
  transferPost() {

    // 显示弹窗
    this.setData({
      popShow: true
    })
    // 三秒后关闭弹窗
    setTimeout(() => {
      this.setData({
        popShow: false
      })
    }, 3000);
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