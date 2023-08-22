const db = require("./connection.js")

// const BoysTrans = require("./tables/BoysTrans.js")
// const GirlsTrans = require("./tables/GirlsTrans.js")
const Transaction = require("./tables/Transaction.js")
const Student = require("./tables/Student.js")

const createTables = (...models)=>{

    for(let model of models){
       model.sync({alter:true})
    }
}

createTables(Transaction,Student)
