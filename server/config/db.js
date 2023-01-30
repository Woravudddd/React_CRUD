const mongoose = require('mongoose')
require('dotenv').config();
const connectDB = async() => {
   
    try{
      //  mongoose.set('strictQuery', true);
        
        await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }).then(()=>
          {
            console.log('connecting')
        })
          
      
    }catch(err){

        console.log(err)
        process.exit(1)
    }
    
}

module.exports = connectDB;