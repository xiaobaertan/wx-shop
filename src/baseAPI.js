import wepy from 'wepy'
const baseURL = 'https://www.zhengzhicheng.cn/api/public/v1'
/* 
    弹框提示一个无图标的 Toast 消息
    @str 要提示的内容
    @flag 要显示的图标
*/
wepy.baseToast = function(str = '获取数据失败', flag = false) {
  wepy.showToast({
    title: str,
    icon: flag ? 'success' : 'none',
    duration: 2500
  })
}

const _req = (url, data, isPost = false) =>
  wepy.request({
    url: baseURL + url,
    method: isPost ? 'post' : 'get',
    data
  })
wepy.get = (url, data = {}) => _req(url, data)
wepy.post = (url, data = {}) => _req(url, data, true)
// /**
//  * 发起 get 请求的 API
//  * @url 请求的地址必须为相对路径
//  * @data 请求的参数对象
//  */
// wepy.get = function(url, data = {}) {
//   return wepy.request({
//     url: baseURL + url,
//     method: 'get',
//     data
//   })
// }
// /**
//  * 发起 post 请求的 API
//  * @url 请求的地址必须为相对路径
//  * @data 请求的参数对象
//  */
// wepy.post = function(url, data = {}) {
//   return wepy.request({
//     url: baseURL + url,
//     method: 'get',
//     data
//   })
// }
