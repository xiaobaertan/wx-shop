import wepy from 'wepy'
export default class extends wepy.mixin {
  data = {
    // 搜索框中的默认内容
    value: '',
    // 搜索建议列表
    suggestList: [],
    // 搜索历史列表
    kwList: []
  }
  onLoad() {
    const kwList = wepy.getStorageSync('kw') || []
    this.kwList = kwList
  }
  methods = {
    // 当搜索关键词发生变化
    onChange(e) {
      this.value = e.detail.trim()
      if (e.detail.trim().length < 1) {
        this.suggestList = []
        return
      }
      this.getSuggestList(e.detail)
    },
    // 触发了搜索
    onSearch(e) {
      const kw = e.detail.trim()
      if (kw.length < 1) {
        return
      }
      // 把用户填写的搜索关键词, 保存到 storage 中
      if (this.kwList.indexOf(kw) === -1) {
        this.kwList.unshift(kw)
      }
      this.kwList = this.kwList.slice(0, 10)
      wepy.setStorageSync('kw', this.kwList)
      wepy.navigateTo({
        url: '/pages/goods_list?query=' + kw
      })
    },
    // 触发了取消
    onCancel() {
      this.suggestList = []
    },
    // 跳转商品详情页
    goGoodsDetail(gid) {
      wepy.navigateTo({
        url: '/pages/goods_detail/main?goods_id=' + gid
      })
    },
    // 点击每个tag标签导航到商品列表页面 同时把参数传递过去
    goGoodsList(query) {
      wepy.navigateTo({
          url: '/pages/goods_list?query=' + query
      })
    },
    clearHistory() {
        this.kwList = []
        wepy.setStorageSync('kw', [])
    }
  }

  // 计算属性
  computed = {
    // true 展示搜索历史区域
    // false 展示搜索建议区域
    isShowHistory() {
      return this.value.length < 1
      //   if(this.value.length < 1 ) {
      //       return true
      //   }
      //   return false
    }
  }

  // 获取搜索建议列表
  async getSuggestList(searchStr) {
    const { data: res } = await wepy.get('/goods/qsearch', { query: searchStr })
    console.log(res)
    if (res.meta.status !== 200) {
      return wepy.baseToast()
    }
    this.suggestList = res.message
    this.$apply()
  }
}
