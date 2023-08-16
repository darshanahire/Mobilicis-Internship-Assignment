const { Router } = require("express");
const mongodb = require("mongodb")
const User = require("../models/user.model");
const router = Router();
require("../db/conn")

router.post('/api/getuser',async(req,res)=>{
    const {_id} = req.body;
    await User.findOne({ _id }).then((data) => {
        if (data) {
            res.status(200).json(data);
        }
        else {
            console.log("User Not Found");
            res.status(404).json("Not Found");
        }
    }).catch((err) => {
        console.log(err);
        res.status(500).json("Internal Server Error");
    })
})

router.post('/api/getconnection',async(req,res)=>{
    const {_id} = req.body;
    await User.findOne({ _id }).then((data) => {
        if (data) {
            res.status(200).json(data.connections);
        }
        else {
            console.log("User Not Found");
            res.status(404).json("Not Found");
        }
    }).catch((err) => {
        console.log(err);
        res.status(500).json("Internal Server Error");
    })
})


//update not working
router.post('/api/update',async(req,res)=>{
    const {obj} = req.body;
    try {
        await User.findOneAndUpdate({ _id: obj._id }, { [obj.key] : obj.value }, { new: true }).then((data) => {
                res.status(200).json(data);
            })
        } 
    catch(err){
        console.log(err);
        res.status(500).json("Internal Server Error");
    }
})

router.post("/api/getallusers", async (req, res) => {
    let data = await User.find({},{_id:1});
    res.status(200).json(data.map((elem)=> elem._id));
})


// use possition to add user at 0th location
router.post('/api/connect',async(req,res)=>{
    const {myID,friendsId} = req.body;    
    try { 
        await User.findOneAndUpdate({ _id: friendsId }, { $push: { connections: myID ,$position: 0} }, { new: true }).then(async (data) => {
            await User.findOneAndUpdate({ _id: myID }, { $push: { connections: friendsId , $position: 0} }, { new: true }).then((data) => {
                res.status(200).json(data.connections);
        }).catch((err)=>{
            console.log(err);
            res.status(500).json("Internal Server Error");
        })
    })
    } catch (err){
        console.log(err)
        res.status(500).json("Internal Server Error");
    }
})

router.post('/api/disconnect',async(req,res)=>{
    const {myID,friendsId} = req.body;
    try { 
        await User.findOneAndUpdate({ _id: friendsId }, { $pull: { connections:  myID , $position: 0} }, { new: true }).then(async (data) => {
            await User.findOneAndUpdate({ _id: myID }, { $pull: { connections: friendsId , $position: 0} }, { new: true }).then((data) => {
                res.status(200).json(data.connections);
        }).catch((err)=>{
            console.log(err);
            res.status(500).json("Internal Server Error");
        })
    })
    } catch (err){
        console.log(err)
        res.status(500).json("Internal Server Error");
    }
})

router.post('/api/login',async(req,res)=>{
    const { email, password } = req.body;
    
    try {
        await User.findOne({ email: email }).then(async (data) => {
            if (data !== null) {
                if (data.password === password) {
                    res.status(200).json(data._id);
                }
                else {
                    res.status(401).json("Unauthorized");
                }
            }
            else {
                res.status(401).json("Unauthorized");
            }
        })
    } catch (err) {
        console.log(err);
        res.status(500).json("Internal Server Error");
    }
})

router.post('/api/register',async (req,res)=>{
    const {newUser} = req.body;
    try{
        await User.findOne({ email: newUser.email }).then(async (data) => {
            if (data === null) {
                await User.create(newUser).then((data)=>{
                    res.status(200).json("Success");
                })
            }
            else {
                console.log(data);
                
                res.status(401).json("Unauthorized");
            }
        })
    }catch(err) {
        console.log(err);
        res.status(409).json("Unauthorized")
    }
})

module.exports = router;