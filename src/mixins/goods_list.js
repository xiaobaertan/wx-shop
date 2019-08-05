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
    goodsList: []
  }
  onLoad(options) {
    console.log(options)
    this.query = options.query || ''
    this.cid = options.cid || ''
    this.getGoodsList()
  }

  // 触底操作
  onReachBottom() {
    // 先判断是会否有下一页的数据
    if (this.pagenum * this.pagesize >= this.total) return
    console.log('触底了')
    this.pagenum++
    this.getGoodsList()
  }

  // 获取商品列表数据
  async getGoodsList() {
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
    this.$apply()
    console.log(res)
  }
}
