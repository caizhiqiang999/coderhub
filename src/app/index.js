const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const app = new Koa()

const userRouter = require('../router/user.router')
const loginRouter = require('../router/login.router')
const momentRouter = require('../router/moment.router')

app.use(bodyParser())
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())
app.use(loginRouter.routes())
app.use(loginRouter.allowedMethods())
app.use(momentRouter.routes())
app.use(momentRouter.allowedMethods())

module.exports = app
