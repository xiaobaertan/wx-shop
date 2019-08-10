import wepy from 'wepy'
export default class extends wepy.mixin {
  data = {
    addressInfo: null,
    cart: [],
    // 是否登录成功了
    isLogin: false
  }
  onLoad() {
    // 读取收货地址
    this.addressInfo = wepy.getStorageSync('address') || null
    // 从购物车列表中 将那些被勾选的商品过滤出来 形成一个新数组
    const newArr = this.$parent.globalData.cart.filter(x => x.isChecked)
    this.cart = newArr
    console.log(newArr)
  }

  methods = {
    // 选择收货地址
    async chooseAddress() {
      // TODO: 异步问题解决
      const res = await wepy.chooseAddress().catch(err => err)
      console.log(res)
      if (res.errMsg !== 'chooseAddress:ok') {
        return
      }
      this.addressInfo = res
      wepy.setStorageSync('address', res)
      this.$apply
    },
    // 获取用户信息
    async getUserInfo(userInfo) {
      // 判断是否获取用户信息失败
      if (userInfo.detail.errMsg !== 'getUserInfo:ok') {
        return wepy.baseToast('获取用户信息失败!')
      }
      console.log(userInfo)
      // 获取用户登录的凭证
      const loginRes = await wepy.login()
      console.log(loginRes)
      if (loginRes.errMsg != 'login:ok') {
        return wepy.baseToast('微信登录失败!')
      }
      // 登录的参数
      const { encryptedData, iv, rawData, signature } = userInfo.detail
      const loginParams = {
        code: loginRes.code,
        encryptedData,
        iv,
        rawData,
        signature
      }
      console.log(loginParams)

      // 发起登录的请求, 换取登录成功后的 token 值
      const { data: res } = await wepy.post('/users/wxlogin', loginParams)
      console.log(res)
      if (res.meta.status === 200) {
        // token
        const token = res.message.token
        wepy.setStorageSync('token', token)
        this.isLogin = true
        this.$apply()
      } else {
        return wepy.baseToast('登录失败!')
      }
    },
    // 支付订单
    async onSubmit() {
      // 金额和信息判断
      if (this.amount <= 0) {
        return wepy.baseToast('订单金额不嗯能够为0!')
      }
      if (this.addressText.length <= 0) {
        return wepy.baseToast('请选择收货地址!')
      }
      // 创建订单
      const { data: createRes } = await wepy.post('/my/order/create', {
        // 订单金额 单位 元
        order_price: '0.01',
        consignee_addr: this.addressText,
        order_detail: JSON.stringify(this.cart),
        goods: this.cart.map(x => {
          return {
            goods_id: x.id,
            goods_number: x.count,
            goods_price: x.price
          }
        })
      })
      if (createRes.meta.status !== 200) {
        return wepy.baseToast('创建订单失败')
      }
      const orderInfo = res.createRes.message
      console.log(orderInfo)

      // 生成预支付订单
      const { data: orderRes } = wepy.post('my/orders/req_unifiedorder', {
        order_number: orderInfo.order_number
      })
      if (orderRes.meta.status !== 200) {
        return wepy.baseToast('生成与支付订单失败!')
      }
      // 走支付的流程
      // 调用微信支付的API
      const payRes = await wepy
        .requestPayment(orderRes.message.pay)
        .catch(err => err)
      if (payRes.errMsg === 'requestPayment:fail cancel') {
        return wepy.baseToast('您已经取消了操作')
      }
      // 用户完成了支付的过程
      // 检查用户的支付结果
      const { data: payCheckRes } = wepy.post('my/orders/chkOrder', {
        order_number: orderInfo.order_number
      })
      if(payCheckRes.meta.status !== 200) {
        return wepy.baseToast('订单支付失败!')
      }
      // 提示用户支付成功
      wepy.showToast({
        title: '支付成功!'
      })
      // 跳转到订单列表页面
      wepy.navigateTo({
        url: 'pages/orderList'
      })
    }
  }

  computed = {
    // 如果存在
    isExistAddress() {
      return this.addressInfo !== null
    },
    addressText() {
      let text = ''
      if (this.addressInfo === null) return text
      const {
        provinceName,
        cityName,
        countyName,
        detailInfo
      } = this.addressInfo
      return `${provinceName}${cityName}${countyName}${detailInfo}`
    },
    amount() {
      let total = 0
      this.cart.forEach(x => (total += x.price * x.count))
      return total * 100
    }
  }
}
