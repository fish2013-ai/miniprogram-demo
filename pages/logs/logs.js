//logs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoriesData: [], // 左边列表数据
    goodsData: [], // 右边商品数据
    currentIndex: 0,
    goodsIndex: 0,
    scrollTop: 0  // 右边商品数据滚动条初始位置
  },
  cates: [], // 接口返回数据
  // 将获取数据封装为函数
  getData() {
    // 请求分类数据
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/categories',
      success: res => {
        // 接口返回数据
        this.cates = res.data.message
        //  存入本地存储,存入一个时间搓，是为了计算缓存过期时间
        wx.setStorageSync("cateKey", { time: Date.now(), data: this.cates })
        // 构造左边列表数据
        let categoriesData = this.cates.map(v => v.cat_name)
        //  右边商品数据
        let goodsData = this.cates[this.data.goodsIndex].children
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
      goodsIndex: index,
      scrolltTop: 0      // 右边商品数据滚动条初始位置为0
    })
    //  右边商品数据
    let goodsData = this.cates[this.data.goodsIndex].children
    this.setData({
      goodsData
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 判断本地存储是否有数据
    const cates = wx.getStorageSync("cateKey")
    if (!cates) {
      this.getData()
    } else {
      // 判断是否过期
      if(Date.now() - cates.time > 1000 * 20){
        this.getData()
      }else{
        this.cates = cates.data
        // 构造左边列表数据
        let categoriesData = this.cates.map(v => v.cat_name)
        //  右边商品数据
        let goodsData = this.cates[this.data.goodsIndex].children
        this.setData({
          categoriesData,
          goodsData
        })
      }
    }
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