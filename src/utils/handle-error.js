const app = require('../app')
const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  NAME_IS_ALREADY_EXISTS,
  NAME_IS_NOT_EXISTS,
  PASSWORD_IS_INCORRENT,
  UNAUTHORIZATION,
  AUTHENTICATION_FAILED,
  CONTENT_CANNOT_BE_EMPTY
} = require('../config/error')

app.on('error', (error, ctx) => {
  let code = 0
  let message = ''

  switch (error) {
    case NAME_OR_PASSWORD_IS_REQUIRED:
      code = -1001
      message = '用户名或者密码不能为空'
      break
    case NAME_IS_ALREADY_EXISTS:
      code = -1002
      message = '用户名已经存在'
      break
    case NAME_IS_NOT_EXISTS:
      code = -1003
      message = '用户名不存在'
      break
    case PASSWORD_IS_INCORRENT:
      code = -1004
      message = '密码不正确'
      break
    case UNAUTHORIZATION:
      code = -1005
      message = '未授权'
      break
    case AUTHENTICATION_FAILED:
      code = -1006
      message = '身份验证失败'
      break
    case CONTENT_CANNOT_BE_EMPTY:
      code = -1007
      message = '动态内容不能为空'
      break
  }

  ctx.body = { code, message }
})
