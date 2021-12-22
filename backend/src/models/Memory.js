const mongoose = require("mongoose")

const memorySchema = new mongoose.Schema({
    _id:{
        type:String,
        required:true,
    },
    title:{
        type: String,
        required:true,
    },
    text:{
        type: String,
        required:true,
    },
    favorite:{
        type: Boolean,
        default: false,
    }
    
})

module.exports = mongoose.model("Memory", memorySchema)