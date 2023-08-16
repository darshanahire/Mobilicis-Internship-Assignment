import axios from 'axios';

const exportedObj = {

    // baseURL: "http://localhost:5000/",
    baseURL : "/",

    async Register(newUser){
        const res = await axios.post(this.baseURL + "api/register",{newUser});
        return res;
    }, 
    async Login(data){
        const res = await axios.post(this.baseURL + "api/login",{email:data.email,password:data.password});
        return res;
    }, 
    async GetUser(_id){
        const res = await axios.post(this.baseURL + "api/getuser",{_id});
        return res;
    },
    async GetConnection(_id){
        const res = await axios.post(this.baseURL + "api/getconnection",{_id});
        return res;
    },
    async Update(obj){
        const res = await axios.post(this.baseURL + "api/update",{obj});
        return res;
    },
    async GetAllUsers(){
        const res = await axios.post(this.baseURL + "api/getallusers");
        return res;
    },
    async Connect(obj){
        const res = await axios.post(this.baseURL + "api/connect",obj);
        return res;
    },
    async DisConnect(obj){
        const res = await axios.post(this.baseURL + "api/disconnect",obj);
        return res;
    },
}

export default exportedObj;