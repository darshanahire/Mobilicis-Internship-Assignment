const mongoose = require('mongoose');

const uri ='mongodb+srv://jwtuser:pass%4011@cluster0.vzhly.mongodb.net/UserDashboardInternship' ;

mongoose.connect(uri,{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>{
    console.log("DB is connected..");
}).catch((err)=>{
    console.log(err);
})

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("Database Connected Sucessfully");
})
