const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const cors = require("cors");
const path = require("path");

const cookieParser = require("cookie-parser");
const router = require('../routes/routes');
require('../db/conn');

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(router);

app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"),(err)=>{
        console.log(err);
    })
})

app.listen(port,()=>{
    console.log(`server listing on: ${port}`);   
})
