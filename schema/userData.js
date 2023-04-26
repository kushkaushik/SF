const mongoose = require('mongoose')
const newSchema = mongoose.Schema({
    Title:{
        type:String,
        required:true
    },
    Details:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        default:"ALT"
    }
   
},{timestamps:true})

mongoose.model("managment_system",newSchema)