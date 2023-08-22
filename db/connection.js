
const { Sequelize } = require("sequelize")

const db = new Sequelize(process.env.DB_CONN_URL)

db.authenticate().then((res)=>{
    console.log("db connected")
}).catch((err)=>console.log(err))


module.exports = db