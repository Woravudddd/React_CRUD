import axios from "axios";

export const registerFunction = async(value) => 
await axios.post(process.env.REACT_APP_API+"/register",value)  


export const loginFunction = async(value) => 
await axios.post(process.env.REACT_APP_API+"/login",value)  


export const authCurrent = async (authtoken) => {
        console.log(authtoken)
return await axios.post(process.env.REACT_APP_API+"/authUser",{},{
    headers : {
        
         authtoken ,
        }
    }
);

}
