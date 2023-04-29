const userService = require('../service/user.service')

class UserController {
  async create(ctx, next) {
    const { name, password } = ctx.request.body
    const result = await userService.create(name, password)
    ctx.body = {
      code: 200,
      message: '用户注册成功'
    }
  }
}

module.exports = new UserController()
