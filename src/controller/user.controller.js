const userService = require("../service/user.service")

class UserController {
  async create(ctx, next) {
    const { name, password } = ctx.request.body;
    const result = await userService.create(name, password)
    ctx.body = {
      result
    }
  }
}

module.exports = new UserController()