const { AUTHENTICATION_FAILED } = require('../config/error')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')
const publicKey = fs.readFileSync(path.resolve(__dirname, '../keys/public.key'))

// 验证用户身份中间件
const verifyAuth = async (ctx, next) => {
  const { authorization } = ctx.request.headers
  if (!authorization) {
    return ctx.app.emit('error', AUTHENTICATION_FAILED, ctx)
  }

  // 验证token
  const token = authorization.replace('Bearer ', '')
  try {
    const result = jwt.verify(token, publicKey, {
      algorithms: ['RS256']
    })
    ctx.user = result
    await next()
  } catch (err) {
    return ctx.app.emit('error', AUTHENTICATION_FAILED, ctx)
  }
}

module.exports = {
  verifyAuth
}
