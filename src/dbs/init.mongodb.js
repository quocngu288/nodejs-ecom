const {MongoClient} = require('mongodb')
const uri = `mongodb+srv://quocngu:Quocngu123@clusternick.qrlzcbl.mongodb.net/?retryWrites=true&w=majority`

class DatabaseService {
  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db('twiter-dev')
  }
  async connect() {
    try {
      // Send a ping to confirm a successful connection
      await this.db.command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } catch (error) {
      throw error
    }
  }
}

const databaseService = new DatabaseService()
module.exports = databaseService
