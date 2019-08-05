import wepy from 'wepy'
export default class extends wepy.mixin {
  data = {
    // 轮播图的数据 默认为空数组
    swiperList: [],
    // 分类数组默认为空数组
    cateItems: [],
    // 楼层数组默认为空数组
    floorData: []
  }

  methods = {
    goGoodsList(url) {
      wepy.navigateTo({
        url
      })
    }
  }

  onLoad() {
    this.getSwiperData()
    this.getCateItems()
    this.getFloorData()
  }
  // 获取轮播图数据的函数
  async getSwiperData() {
    const { data: res } = await wepy.get('/home/swiperdata')
    if (res.meta.status !== 200) {
      // console.log('获取失败!')
      return wepy.baseToast()
    }
    this.swiperList = res.message
    this.$apply()
  }

  // 获取首页分类相关的数据项
  async getCateItems() {
    const { data: res } = await wepy.get('/home/catitems')
    if (res.meta.status !== 200) {
      return wepy.baseToast()
    }
    this.cateItems = res.message
    this.$apply()
  }

  // 获取楼层数据
  async getFloorData() {
    const { data: res } = await wepy.get('/home/floordata')
    if (res.meta.status !== 200) {
      return wepy.baseToast()
    }
    this.floorData = res.message
    this.$apply()
    console.log(this.floorData)
  }
}
