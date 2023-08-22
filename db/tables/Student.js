
const db = require("../connection.js")
const { Sequelize,DataTypes } = require("sequelize")

const Student = db.define("Student",{

    rollNo : {
        type:DataTypes.STRING,
        primaryKey:true
    },
    gender :{
        type:DataTypes.BOOLEAN
    },
    amount:{
        type:DataTypes.INTEGER
    }

})


module.exports = Student