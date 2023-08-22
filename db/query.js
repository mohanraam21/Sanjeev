
const Transaction = require("./tables/Transaction.js")
const Student = require("./tables/Student.js")

async function addTransaction(rollNo,service,amount){

    return await Transaction.create({
        date : new Date(),
        amount:amount,
        rollNo:rollNo,
        service:service
    })
}

async function isUserExist(rollNo){

    let user = await Student.findOne({
        where:{
            rollNo:rollNo
        }
    })

    return user!=null;

}

module.exports = { addTransaction , isUserExist}