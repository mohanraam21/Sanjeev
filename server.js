
const express = require("express")
require("dotenv").config();
require("./db/init.js")

const server = express();

server.use(express.json());
server.use("/saveBill",require("./router/saveBill.js"))

server.listen(process.env.PORT,()=>{
    console.log(`Server listened @ ${process.env.PORT}`)
})