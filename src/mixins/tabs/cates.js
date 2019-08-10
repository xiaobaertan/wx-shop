import wepy from 'wepy'
export default class extends wepy.mixin {
  data = {
    // 所有分类的数据列表
    cateList: [],
    // 默认被激活的索引项
    active: 0,
    // 当前屏幕高度
    wh: 0,
    // 所有的二级分类数据
    secondCate: []
  }
  onLoad() {
    this.getWindowHeight()
    this.getCateList()
  }
  methods = {
    onChange(e) {
      // e.detail是点击项的索引
      // console.log(e.detail)
      this.secondCate = this.cateList[e.detail].children
    },
    // 点击跳转到商品列表页面, 并将分级的cid传递过去
    goGoodsList(cid) {
        wepy.navigateTo({
            url: '/pages/goods_list?cid=' + cid
        })
    }
  }

  async getCateList() {
    const { data: res } = await wepy.get('/categories')
    if (res.meta.status !== 200) {
      return wepy.baseToast()
    }
    this.cateList = res.message
    this.cateList.length > 0 && (this.secondCate = res.message[0].children)
    this.$apply()
  }

  // 动态获取屏幕可用的高度
  async getWindowHeight() {
    const res = await wepy.getSystemInfo()
    if (res.errMsg === 'getSystemInfo:ok') {
      this.wh = res.windowHeight
      this.$apply()
    }
  }
}
