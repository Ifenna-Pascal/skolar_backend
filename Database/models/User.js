const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstname:{
        type:String,
        require:[true, "Firstname is required"]
    },

    lastname:{
        type:String,
        require:[true, "Latname is required"]
    },

    username:{
        type:String,
        required:[true, "Name is reqiured"]
    },
    password:{
        type:String,
        required:[true, "Password is required"],
    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
        trim:true,
        validate: {
            validator: function (value) {
              return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value);
            },
            message: 'please enter a valid email',
        }
    },

    role:{
      type:String,
      enum:["student", "teacher"]  
    },
    status: {
        type:String,
        enum:["Pending", "Active"],
        default:"Pending",
        required:[true, "Status is required from the enum"]
    },

    code:{
        type:String,
        unique:true
    },

    image:{
        type:String
    },

    createdAt:{
        type:Date,
        default:new Date()
    }
})

const User = mongoose.model("user", userSchema);
module.exports = User