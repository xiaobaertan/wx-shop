import wepy from 'wepy'
export default class extends wepy.mixin {
  data = {
    // 默认被激活的标签页
    active: 0,
    // 全部订单列表
    allOrderList: [],
    // 待付款的订单列表
    waitOrderList: [],
    // 已付款的订单列表
    finishOrderList: []
  }

  onLoad() {
    this.getOrderList(this.active)
  }

  methods = {
    // 每当切换标签页的时候就会触发这个函数
    tabChanged(e) {
      this.active = e.detail.index
      this.getOrderList(this.active)
    }
  }
  // 获取订单列表
  async getOrderList(index) {
    console.log(index)
    const { data: res } = await wepy.get('my/orders/all', { type: index + 1 })
    if (res.meta.status !== 200) {
      return wepy.baseToast('获取订单列表失败!')
    }
    res.message.orders.forEach(
      x => (x.order_detail = JSON.parse(x.order_detail))
    )
    console.log(res)
    switch (index) {
      case 0:
        this.allOrderList = res.message.orders
        break
      case 1:
        this.waitOrderList = res.message.orders
        break
      case 2:
        this.finishOrderList = res.message.orders
        break
      default:
        wepy.baseToast('请求列表错误!')
        break
    }
    this.allOrderList = [
      { order_number: 'heima8132901284011', total_price: 0.01, total_count: 5 },
      { order_number: 'heima8132901284012', total_price: 0.01, total_count: 5 },
      { order_number: 'heima8132901284013', total_price: 0.01, total_count: 5 },
      { order_number: 'heima8132901284014', total_price: 0.01, total_count: 5 },
      { order_number: 'heima8132901284015', total_price: 0.01, total_count: 5  },
      { order_number: 'heima8132901284016', total_price: 0.01, total_count: 5 },
      { order_number: 'heima8132901284017', total_price: 0.01, total_count: 5 }
    ]
    // if (index === 0) {
    //   this.allOrderList = res.message.orders
    // } else if (index === 1) {
    //   this.waitOrderList = res.message.orders
    // } else if (index === 2) {
    //   this.finishOrderList = res.message.orders
    // } else {
    //   wepy.baseToast('请求列表错误!')
    // }
  }
}
