const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
    course_name:{
        type:String,
        require:[true, "Course is required"]
    },

    lessons:[{
        type:mongoose.Types.ObjectId,
        ref:"Lessons"
    }],

    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }
})

const Course = mongoose.model("lesson", courseSchema);
module.exports = Course;