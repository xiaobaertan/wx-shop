import wepy from 'wepy'
export default class extends wepy.mixin {
  data = {
    goods_id: '',
    // 商品的详情
    goodsInfo: {}
  }

  onLoad(options) {
    this.goods_id = options.goods_id
    this.getGoodsInfo()    
  }

  // 获取商品详情数据
  async getGoodsInfo(){
      const { data: res } = await wepy.get('/goods/detail', {
          goods_id: this.goods_id
      })      
      if(res.meta.status !== 200) {
          return wepy.baseToast()
      }
      console.log(res);
      
      this.goodsInfo = res.message
      console.log(this.goodsInfo);
      
      this.$apply()
  }
}
