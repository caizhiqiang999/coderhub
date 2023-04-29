const { SERVER_PORT } = require('./config/server')
const app = require('./app/index')
require('./utils/handle-error')

app.listen(SERVER_PORT, () => {
  console.log('服务器启动成功')
})
