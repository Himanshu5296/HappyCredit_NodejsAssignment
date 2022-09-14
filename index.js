
const PORT  = process.env.PORT || 8080
const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const postRouter = require("./Routes/post.routes")
const commentRouter = require("./Routes/comment.routes")
dotenv.config()

const USERNAME = process.env.mongo_username
const PASSWORD = process.env.mongo_password
const connection = mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.eydculc.mongodb.net/?retryWrites=true&w=majority`)  
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome")
})

app.use(postRouter)
app.use(commentRouter)

app.listen(PORT,async()=>{
    try {
        await connection
        console.log("connected to mongodb")
    } catch (error) {
        console.log(error)
    }
    console.log("Server:http://localhost:8080");
})