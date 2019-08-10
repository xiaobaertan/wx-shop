import wepy from 'wepy'
export default class extends wepy.mixin {
  data = {
    // 购物车商品列表
    cart: []
  }
  onLoad() {
    this.cart = this.$parent.globalData.cart
  }
  methods = {
    // 监听商品数量变化的事件
    countOnChange(id, e) {
      const count = e.detail
      // 获取变化之后最新的数量值
      console.log('数量: ' + e.detail)
      // 商品的id值
      console.log('商品id:' + id)
      this.$parent.updateGoodsCount(id, count)
    },
    // 当商品前面的复选框 选中状态发生变化变化 会触发这个函数
    statusChanged(id, e) {
      console.log(id)
      console.log(e.detail)
      // 当前最新的选中状态
      const status = e.detail
      this.$parent.updateGoodsStatus(id, status)
    },
    // 点击删除对应的商品
    close(id) {
      console.log(id)
      this.$parent.removeGoodsById(id)
    },
    // 监听全选复选框值的改变
    onFullCheckChanged(e) {
      this.$parent.updateAllGoodsStatus(e.detail)
    },
    // 提交订单
    submitOrder() {
        if(this.amount < 1) {
            return wepy.baseToast('请勾选您要购买的商品!')
        }
        wepy.navigateTo({
            url: '/pages/order'
        })
    }
  }
  computed = {
    // 判断购物车是否为空
    isEmpty() {
      if (this.cart.length < 1) {
        return true
      }
      return false
    },
    // 总价格 单位是 分
    amount() {
      let total = 0 // 单位是元
      this.cart.forEach(x => x.isChecked && (total += x.price * x.count))
      return total * 100
    },
    // 是否全选
    isFullChecked() {
      return this.cart.filter(i => i.isChecked).length === this.cart.length
    }
  }
}
