const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.post('/',(req,res)=>{
    try{
        res.send(req.body.data)
    }catch(e){
        res.send("Something went wrong").status(500)
    }
})

app.listen('5000',()=>{
    console.log("Listening on port 5000")
})