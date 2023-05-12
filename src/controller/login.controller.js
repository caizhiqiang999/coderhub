const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')
const privateKey = fs.readFileSync(path.resolve(__dirname, '../keys/private.key'))

class LoginController {
  sign(ctx, next) {
    // 颁发token
    const token = jwt.sign(ctx.user, privateKey, {
      expiresIn: 60 * 60,
      algorithm: 'RS256'
    })
    ctx.body = {
      code: 200,
      token: token
    }
  }
}

module.exports = new LoginController()
