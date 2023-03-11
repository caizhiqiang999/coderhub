const mysql = require("mysql2")

const connectionPool = mysql.createPool({
  host: "localhost",
  port: 3306,
  database: "coderhub",
  user: "root",
  password: "123456",
  connectionLimit: 5
})

connectionPool.getConnection((err, connection) => {
  if (err) {
    console.log("连接数据库失败")
    return
  }

  // 尝试和数据库建立连接
  connection.connect(err => {
    if (err) {
      console.log("和数据库交互失败")
    } else {
      console.log("和数据库交互成功")
    }
  })
})

const connection = connectionPool.promise()

module.exports = connection