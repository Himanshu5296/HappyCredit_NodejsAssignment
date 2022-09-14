const {Router} = require("express")
const PostSchema = require("../models/post.model")
const postRouter = Router()

postRouter.post("/createPost",(req,res)=>{
    const {title,body} = req.body
    const post = new PostSchema({title,body})
    post.save((err,success)=>{
        if(err){
            return res.status(401).send({message:err})
        }
        return res.status(200).send(post)
    })
})

postRouter.get("/getPost",async(req,res)=>{
    const data = await PostSchema.find()
    res.status(201).send(data)
})

module.exports = postRouter