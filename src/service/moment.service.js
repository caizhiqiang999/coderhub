const connection = require('../app/database')

class MomentService {
  async create(content, id) {
    const statement = 'INSERT INTO `moment` (`content`, `user_id`) VALUES (?, ?);'
    const result = await connection.execute(statement, [content, id])
    return result
  }
}

module.exports = new MomentService()
