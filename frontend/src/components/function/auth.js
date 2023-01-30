import axios from "axios";

export const registerFunction = async(value) => 
await axios.post(process.env.REACT_APP_API+"/register",value)  