const bcrypt = require("bcrypt") ;
const jwt = require("json-web-token")
const User = require("../Database/Repository/userRepo");
 
 const signUp = async (req, res) =>{
    const {firstname, lastname, username, email, password, role}  = req.body;
    const foundUser = await User.find_user_by(email);
    if(foundUser) return res.status(400).json("User Signed Up Already")
    const code = jwt.sign(email,process.env.SECRET )
    const user = {
        firstname,
        lastname,
        username, 
        role,
        password: await bcrypt.hash(password, 10),
        email,
        code
    } 
    const createUser = await User.Register(user);
    if(!createUser) res.status(404).send("User not created")
    const token = jwt.sign({id:_id}, process.env.SECRET,{expiresIn:"36000"})   
    res.json({token:token})
 }

 const signin = async (req, res)=>{
    const {email, password} = req.body;
    if(!email || !password) return res.status(400).json("user details is required");
    const user = await  User.find_user_by(email);
    if(!user) return res.status(400).json("user does not exist");
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(400).json("Password does not match");
    const token = jwt.sign({id:user._id}, process.env.SECRET , {expiresIn:"2h"});
    return res.json({token:token})
}

module.exports = {signUp, signin}
E5mER3