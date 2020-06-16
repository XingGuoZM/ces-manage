const Koa = require('koa')
const path = require('path')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const koaBody=require('koa-body')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const static_ = require('koa-static')
var cors = require('koa2-cors');
const index = require('./routes/index')
// error handler
onerror(app)

// middlewares
app.use(koaBody({
  multipart: true,
  formidable: {
      maxFileSize: 200*1024*1024    // 设置上传文件大小最大限制，默认2M
  }
}));
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(cors())
app.use(static_(path.join(__dirname)+ '/public/'))
// logger
app.use(async (ctx, next) => {await next()})
// routes
app.use(index.routes(), index.allowedMethods())
// error-handling
app.on('error', (err, ctx) => {console.error('server error', err, ctx)});
console.log('Your application is running here: http://localhost:3000')
module.exports = app






