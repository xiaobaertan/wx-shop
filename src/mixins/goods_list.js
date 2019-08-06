import wepy from 'wepy'
export default class extends wepy.mixin {
  data = {
    // 查询关键词
    query: '',
    // 商品分类id
    cid: '',
    // 页码值
    pagenum: 1,
    // 每页显示多少条数据
    pagesize: 10,
    total: '',
    goodsList: [],
    // 底线的显示与隐藏
    isover: false,
    // 表示当前数据是否正在请求中
    isloading: false
  }
  onLoad(options) {
    console.log(options)
    this.query = options.query || ''
    this.cid = options.cid || ''
    this.getGoodsList()
  }

  // 触底操作
  onReachBottom() {
    // 判断是否正在请求数据中
    if (this.isloading) {
      return
    }
    // 先判断是会否有下一页的数据
    if (this.pagenum * this.pagesize >= this.total) {
      this.isover = true
      return
    }
    console.log('触底了')
    this.pagenum++
    this.getGoodsList()
  }

  // 下拉刷新的操作
  onPullDownRefresh() {
    // 初始化必要的字段值
    this.pagenum = 1
    this.total = 0
    this.goodsList = []
    this.isover = this.isloading = false
    // 重新发起数据请求
    this.getGoodsList(() => {
      console.warn('这是下拉刷新的关闭')
      // 停止下拉刷新
      wepy.stopPullDownRefresh()
    })
  }

  methods = {
    // 点击跳转商品详情页面
    goGoodsDetaill(goods_id) {
      wepy.navigateTo({
        url: '/pages/goods_detail/main?goods_id=' + goods_id
      })
    }
  }

  // 获取商品列表数据
  async getGoodsList(cb) {
    this.isloading = true
    const { data: res } = await wepy.get('/goods/search', {
      query: this.query,
      cid: this.cid,
      pagenum: this.pagenum,
      pagesize: this.pagesize
    })
    if (res.meta.status !== 200) {
      wepy.baseToast()
      return
    }
    this.goodsList = [...this.goodsList, ...res.message.goods]
    this.total = res.message.total
    this.isloading = false
    this.$apply()
    cb && cb()
  }
}
