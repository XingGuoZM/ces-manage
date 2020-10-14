const router = require('koa-router')()
const User = require('../controller/UserController')

const user = new User();
router.post('/api/user/query',user.query)
router.post('/api/user/add',user.add)
router.post('/api/user/edit',user.edit)
router.post('/api/user/del',user.del)
router.post('/api/user/download',user.download)
router.post('/api/user/upload',user.upload)

module.exports = router
