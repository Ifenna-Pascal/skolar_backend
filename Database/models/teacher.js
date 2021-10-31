const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema({
   user:{
       type:mongoose.Types.ObjectId,
       ref:"User",
   },

    courses:[{
        types:mongoose.Types.ObjectId,
        ref:"Courses"
    }],
})

const Teacher = mongoose.model("teacher", teacherSchema);
module.exports = Teacher;