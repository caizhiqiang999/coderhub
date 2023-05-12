const momentService = require('../service/moment.service')
const { CONTENT_CANNOT_BE_EMPTY } = require('../config/error')

class MomentController {
  // 创建动态接口
  async create(ctx, next) {
    const { content } = ctx.request.body
    if (!content) {
      return ctx.app.emit('error', CONTENT_CANNOT_BE_EMPTY, ctx)
    }
    const { id } = ctx.user
    const result = await momentService.create(content, id)
    ctx.body = {
      code: 200,
      message: '创建动态成功',
      result
    }
  }
}

module.exports = new MomentController()
