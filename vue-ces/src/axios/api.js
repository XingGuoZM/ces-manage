import {fetch} from './fetch'
/**
 * url:请求地址
 * data:请求数据
 * params:下载时的附带数据（仅下载时可用）
 * tableLoading:请求数据列表时的加载效果
 * commitLoading：请求提交时的加载效果
 * successMsg:请求成功时是否提示
 * isDownload:是否下载请求
 * isUpload:是否上传请求
*/
export default {
  User: {
    query: data => fetch({url: '/user/query', data,tableLoading:true}),
    add: data => fetch({url: '/user/add', data,commitLoading:true,successMsg:true}),
    edit: data => fetch({url: '/user/edit', data,commitLoading:true,successMsg:true}),
    del: data => fetch({url: '/user/del', data,successMsg:true}),
    upload:data=>fetch({url:'/user/upload',data,isUpload:true}),
    download:data=>fetch({url:'/user/download',data,isDownload:true,successMsg:true})
  }
}