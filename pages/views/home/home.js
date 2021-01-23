// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex:0
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
  titleClick: function (e) { 
    this.setData({
      currentIndex:e.target.dataset.index
    })
  },
  code: function () {
    wx.scanCode({
    //  是否只能从相机扫码，不允许从相册选择图片
      onlyFromCamera: false,
      // 扫码类型
      scanType: ['qrCode', 'barCode', 'datamatrix', 'pdf417'],
      // 接口调用成功的回调函数
      success: (result)=>{
        console.log(result)
      },
      // 接口调用失败的回调函数
      fail: () => { 
        // wx.showToast({
        //   title: '未成功',
        //   duration: 2000
        // })
      },
      // 接口调用结束的回调函数（调用成功、失败都会执行）
      complete: ()=>{}
    });
  },
  // 去资讯详情
  toInfoDetailss: function () { 
   
    wx.navigateTo({
      url: '../infoDetailss/infoDetailss?id=1'
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