const {Schema,model} = require("mongoose")

const commentSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    postId:{
        type:Schema.Types.ObjectId,
        ref:"Post"
    }
})

const CommentSchema = model("Comment",commentSchema)

module.exports = CommentSchema