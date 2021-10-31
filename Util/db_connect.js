const mongoose = require("mongoose");

const DB_CONNECT = ()=>{
    mongoose.connect(process.env.MONGO_DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(connected=>{
        console.log("DB Connected");
    })
}

module.exports = DB_CONNECT;