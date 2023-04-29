const { NAME_OR_PASSWORD_IS_REQUIRED, NAME_IS_ALREADY_EXISTS } = require('../config/error')
const userService = require('../service/user.service')

const verifyUser = async (ctx, next) => {
  const { name, password } = ctx.request.body
  // 1.验证用户名和密码是否为空
  if (!name || !password) {
    return ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRED, ctx)
  }

  // 2.判断name是否在数据库中已经存在
  const users = await userService.findUserByName(name)
  if (users.length) {
    return ctx.app.emit('error', NAME_IS_ALREADY_EXISTS, ctx)
  }

  // 3.执行下一个中间件
  await next()
}

module.exports = {
  verifyUser
}
