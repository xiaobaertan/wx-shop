import wepy from 'wepy'
export default class extends wepy.mixin {
  data = {
    goods_id: '',
    // 商品的详情
    goodsInfo: {},
    // 收货地址
    addressInfo: null
  }

  onLoad(options) {
    this.goods_id = options.goods_id
    this.getGoodsInfo()
  }

  methods = {
    // 点击预览图片
    preview(current) {
      wepy.previewImage({
        // 所有看到的图片
        urls: this.goodsInfo.pics.map(item => item.pics_big),
        // 当前默认看到的图片
        current: current
      })
    },
    async chooseAddress() {
      try {
        const res = await wepy.chooseAddress()
        this.addressInfo = res
        wepy.setStorageSync('address', res)
      } catch (err) {
        console.log(err)
        wepy.baseToast('获取收货地址失败!')
      }
      this.$apply()
    },
    // 点击商品 添加购物车
    addToCart() {
      // 获取商品的所有信息
      // console.log(this.goodsInfo)
      this.$parent.addGoodsToCart(this.goodsInfo)
      wepy.showToast({
        title: '已加入购物车',
        icon: 'success'
      })
    }
  }

  computed = {
    addressStr() {
      if (this.addressInfo === null) return '请选择收货地址'
      const { provinceName, cityName, countyName, detailInfo } = this.addressInfo
      return `${provinceName}${cityName}${countyName}${detailInfo}`
    },
    // 所有已经勾选的商品的数量
    total() {
      return this.$parent.globalData.total
    }
  }

  // 获取商品详情数据
  async getGoodsInfo() {
    const { data: res } = await wepy.get('/goods/detail', {
      goods_id: this.goods_id
    })
    if (res.meta.status !== 200) {
      return wepy.baseToast()
    }
    this.goodsInfo = res.message
    this.$apply()
  }
}
