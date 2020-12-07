import axios from 'axios'
import qs from 'qs'
import { Message, Loading } from 'element-ui'
// import mutationTypes from '../store/mutaion-types'
axios.defaults.baseURL = window.ApiUrl
axios.defaults.timeout = 30 * 1000
// 对象转换为formData
const transfromData = object => {
  let ret = new FormData()
  Object.entries(object).forEach(item => {
    ret.append(item[0], item[1])
  })
  return ret
}
// 表格加载动效
const tableLoading = {
  lock: true,
  text: '加载中...',
  // spinner: 'el-icon-loading',
  // background: 'rgba(1,35,70,.8)',
  target: '.ces-table'
}
// 数据提交动效
const modalLoading = {
  lock: true,
  text: '提交中...',
  // spinner: 'el-icon-loading',
  // background: 'rgba(0, 0, 0, 0.7)',
  target: '.ces-modal__body'
}
// 下载
const download = (url) => {
  let downloadElement = document.createElement('a')
  downloadElement.href = url
  document.body.appendChild(downloadElement)
  downloadElement.click()
  document.body.removeChild(downloadElement) // 下载完成移除元素
}
export function fetch (options) {
  let data = ''
  if (options.params) data = qs.stringify(Object.assign(options.params))
  if (options.data) data = qs.stringify(Object.assign(options.data))
  let loadingInstance = null
  let commitLoading = null
  if (options.tableLoading) loadingInstance = Loading.service(tableLoading)
  if (options.commitLoading) commitLoading = Loading.service(modalLoading)

  // 文件上传
  if (options.isUpload) {
    return window.ApiUrl+options.url
  }
  // 数据请求
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      headers: {
        'Content-Type': options.typeFormData ? 'application/x-www-form-urlencoded' : 'application/json;charset=UTF-8',
        'Authorization': localStorage.getItem('token')
      },
      responseType: 'json',
      data: options.typeFormData ? transfromData[data] : data
    })

    // 请求拦截
    instance.interceptors.request.use(function (config) {
      config.method = options.method || 'get'
      if (config.data instanceof Object) {
        config.data.memberId = localStorage.getItem('userData') && JSON.parse(localStorage.getItem('userData')).id
      }
      return config
    }, function (error) {
      Message({type: 'error', message: error, showClose: true})
      return Promise.reject(error)
    })
    // 请求发送
    instance(options).then(response => {
      if (loadingInstance) loadingInstance.close()
      if (commitLoading) commitLoading.close()
      // 响应码
      switch (response.data.code) {
        case 200:
          resolve(response)
          // 文件下载
          if (options.isDownload) download(response.data.url)
          if (options.successMsg) Message({type: 'success', message: response.data.msg, showClose: true})
          break
        default:
          Message({type: 'error', message: response.data.msg, showClose: true})
          break
      }
    }).catch(error => {
      if (loadingInstance) loadingInstance.close()
      if (commitLoading) commitLoading.close()
      reject(error)
      Message({type: 'error', message: '请求出错，稍后重试', showClose: true})
    })
  })
}
