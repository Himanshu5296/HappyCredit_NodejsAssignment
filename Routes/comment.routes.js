const {Router} = require("express")
const CommentSchema = require("../models/comment.model")
const { body, validationResult } = require('express-validator');
const PostSchema = require("../models/post.model")
const commentRouter = Router()

commentRouter.post("/createComment/:id", body('email').isEmail(),async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } 
    const {id} = req.params
    const post = await PostSchema.findById({id})
    if(!post){
        return res.status(201).send({message:"POST doesn't exist"})
    }
    const {name,email,body} = req.body
    // console.log(name,email,id)
    const comment = new CommentSchema({
        name:name,
        email:email,
        body:body,
        postId:id 
    })
    comment.save()

    return res.status(201).send({message:"comment successfully"})
})

commentRouter.get("/getComment",async(req,res)=>{
    const data = await CommentSchema.find()
    res.status(201).send(data)
})

module.exports = commentRouter