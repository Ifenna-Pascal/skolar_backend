const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    user:{
       type:mongoose.Types.ObjectId,
       ref:"User",
   },

    paid_courses:[{
        types:mongoose.Types.ObjectId,
        ref:"Course"
    }],
})

const Student = mongoose.model("student", studentSchema);
module.exports = Student;