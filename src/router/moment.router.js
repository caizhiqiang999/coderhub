const KoaRouter = require('@koa/router')
const { verifyAuth } = require('../middleware/verifyAuth.middleware')
const { create } = require('../controller/moment.controller')

const momentRouter = new KoaRouter({ prefix: '/moment' })

// 创建动态接口
momentRouter.post('/create', verifyAuth, create)

module.exports = momentRouter
