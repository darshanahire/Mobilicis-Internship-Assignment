import axios from 'axios';

const exportedObj = {

    baseURL: "http://localhost:5000",
    // baseUrl : "/",

    async Register(newUser){
        const res = await axios.post(this.baseURL + "/api/register",{newUser});
        return res;
    }, 
    async Login(data){
        const res = await axios.post(this.baseURL + "/api/login",{email:data.email,password:data.password});
        return res;
    }, 
    async GetUser(_id){
        const res = await axios.post(this.baseURL + "/api/getuser",{_id});
        return res;
    },
    async Update(obj){
        const res = await axios.post(this.baseURL + "/api/update",{obj});
        return res;
    }
}

export default exportedObj;