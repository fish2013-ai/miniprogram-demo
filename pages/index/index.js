Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgData: [], //轮播图数据
    catitems: [], //导航菜单数据
    floordata: {}, //楼层数据
    indicatorDots: true, //是否显示面板指示点
    vertical: false, //滑动方向是否为纵向
    autoplay: true, //是否自动切换
    interval: 2000, //自动切换时间间隔
    duration: 500 //滑动动画时长
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //轮播图数据
    wx.request({
        url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata', //轮播图数据的接口地址
        success: res => {
          this.setData({
            imgData: res.data.message
          })
        }
      }),
      //导航菜单数据
      wx.request({
        url: 'https://api.zbztb.cn/api/public/v1/home/catitems', //导航菜单数据的接口地址
        success: res => {
          this.setData({
            catitems: res.data.message
          })
        }
      }),
      // 楼层数据
      wx.request({
        url: 'https://api.zbztb.cn/api/public/v1/home/floordata',
        success: res => {
          this.setData({
            floordata:res.data.message
          })
          console.log(this.data.floordata)
        }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})