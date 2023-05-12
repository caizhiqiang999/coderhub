const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  NAME_IS_NOT_EXISTS,
  PASSWORD_IS_INCORRENT
} = require('../config/error')
const userService = require('../service/user.service')
const md5password = require('../utils/md5-password')

const verifyLogin = async (ctx, next) => {
  const { name, password } = ctx.request.body
  // 1.验证用户名和密码是否为空
  if (!name || !password) {
    return ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRED, ctx)
  }
  // 2.验证用户名是否存在
  const users = await userService.findUserByName(name)
  if (!users.length) {
    return ctx.app.emit('error', NAME_IS_NOT_EXISTS, ctx)
  }
  // 3.验证密码是否一致
  if (users[0].password !== md5password(password)) {
    return ctx.app.emit('error', PASSWORD_IS_INCORRENT, ctx)
  }
  // 4.设置一个user，方便后续颁发token
  ctx.user = { name, id: users[0].id }
  await next()
}

module.exports = {
  verifyLogin
}
