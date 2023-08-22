
const db = require("../connection.js")
const { DataTypes } = require("sequelize")

const Transaction = db.define("Transaction",{
    
    service:{
       type:DataTypes.STRING
    },
    date:{
        type:DataTypes.DATE
    },
    amount:{
        type:DataTypes.INTEGER
    },
    rollNo:{
        type:DataTypes.STRING
    }

})

module.exports = Transaction