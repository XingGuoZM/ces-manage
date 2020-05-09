const router = require('koa-router')()
const User = require('../controller/UserController')
router.post('/api/user/query',User.query)
      .post('/api/user/add',User.add)
      .post('/api/user/edit',User.edit)
      .post('/api/user/del',User.del)
module.exports = router
