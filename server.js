const express = require('express');
const app = express();
const port = 5000;

require('./db/conn');
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser());
const router = require('./routes/routes');
app.use(router);

app.listen(port,()=>{
    console.log(`server listing on: ${port}`);   
})