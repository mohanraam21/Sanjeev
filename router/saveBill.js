
const express = require("express");
const { addTransaction, isUserExist } = require("../db/query");

const router = express.Router();

const saveOthersTransaction = async (service,amount)=>{

    try{
     return await addTransaction(0,service,amount)
    }

    catch(err){
       return false;
    }
}

const saveStudentsTransaction = async (rollNo,service,amount)=>{

     let user = await isUserExist(rollNo)

     if(user){

       if(!user.dataValues.gender)amount=0
       let isInserted = await addTransaction(rollNo,service,amount)
       if(!isInserted) return false;
       return isInserted
     }

     else return null;
}

router.post("/",async (req,res)=>{

    let type = req.body.type;

    if(type==0){

        let isInserted  = await saveOthersTransaction(req.body.service,req.body.amount)

        if(!isInserted) res.status(500).send("Internal Server error")
        else res.status(200).json(isInserted)
    }

    else{
      let isInserted = await saveStudentsTransaction(req.body.rollNo,req.body.service,req.body.amount)

      if(isInserted==null) res.status(401).send("Student not exist")
      else if(!isInserted) res.status(500).send("Internal Server error")
      else res.status(200).json(isInserted)
  }


})

module.exports = router