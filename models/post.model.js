const {Schema,model} = require("mongoose")

const postSchema = new Schema({
    userId: {
        type:Number
    },
    title:{
        type:String
    },
    body:{
        type:String
    },
    comments:[{
            type:Schema.Types.ObjectId,
            ref:"Comment"
    }]
})

const PostSchema = model("Post",postSchema)

module.exports = PostSchema