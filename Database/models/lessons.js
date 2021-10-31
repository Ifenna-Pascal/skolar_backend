const mongoose = require("mongoose");

const lessonSchema = mongoose.Schema({
   lesson_name:{
       type:mongoose.Types.ObjectId,
       ref:"User",
   },
   lesson_video_link:{
       type:String,
       require:[true, "Video link is required"]
   },

   course_name:{
       type:String,
       require:[true, "course_name is required"]
   }
})

const Lesson = mongoose.model("lesson", lessonSchema);
module.exports = Lesson;