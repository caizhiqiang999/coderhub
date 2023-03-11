const KoaRouter = require("@koa/router")
const { create } = require("../controller/user.controller")

const userRouter = new KoaRouter({ prefix: "/user" })

// 用户注册接口
userRouter.post("/", create)

module.exports = userRouter