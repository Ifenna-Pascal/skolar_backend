const User = require("../models/User");
const Teacher = require("../models/teacher");
const Student = require("../models/student");
const asyncs = require("async")


class userRepo {
    async createUser(user){
        const newUser = await User.create(user);
        this.user_id = newUser.id;
        return newUser
    }

    async createTeacher_or_student(userId){
        const newRole = {user:userId};
        if(user.role === "teacher"){
            const teacher = await Teacher.create(newRole);
            return teacher
        }else{
            const student = await Student.create(newRole)
            return student
        }
    }

    async Register(user){
        let result
        asyncs.waterfall([
            this.createUser(user),
            this.createTeacher_or_student(this.user_id)
        ],(err,result)=>{
            if(err) console.log(err);
            result = result
        })
        return result
    }

     async find_user_by(param){
        const foundUser = await User.findOne({$or:[{email:param}, {username:param}]});
        return foundUser 
    }
}

const user_Repo_Instance = new userRepo()
module.exports = user_Repo_Instance;