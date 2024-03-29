const mongoose=require("mongoose")

const messageSchema=mongoose.Schema({
    message:{
        text:{
            type:String,
            required:true,
            unique:false,
        }
    },
    users: Array,
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
},{timestamps:true})

const messageModel=mongoose.model("messages",messageSchema);

module.exports=messageModel;

