//logs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoriesData: [], // 左边列表数据
    goodsData: [], // 右边商品数据
    currentIndex: 0,
    goodsIndex: 0
  },
  // 将获取数据封装为函数
  getData() {
    // 请求分类数据
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/categories',
      success: res => {
        // 构造左边列表数据
        let categoriesData = res.data.message.map(v => v.cat_name)
        //  右边商品数据
        let goodsData = res.data.message[this.data.goodsIndex].children
        this.setData({
          categoriesData,
          goodsData
        })
      }
    })
  },
  // 点击左边菜单时触发 
  handleMenuTap(e) {
    const index = e.currentTarget.dataset.index
    this.setData({
      currentIndex: index,
      goodsIndex: index
    })
    this.getData()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
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