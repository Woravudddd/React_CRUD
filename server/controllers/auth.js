const bcrypt = require('bcryptjs')
const User = require('../models/User')
const Jwt = require('jsonwebtoken')


exports.login = async(req,res)=>{
    try{
       
        const {username , password } = req.body
        var user = await User.findOneAndUpdate({username},{new: true});
        console.log(user)
        if(user && user.enabled) {
            //checkpassword 
            const isMatch = await bcrypt.compare(password,user.password)
          
            if(!isMatch){
                return res.status(400).send({ message : 'Password Invalid!!'})
            }
            const payload = {
                user:{
                    username: user.username,
                    role : user.role
                },

            };
            Jwt.sign(payload,'JwtSecret',{expiresIn : 3600}, (err,token)=>{ 
             if(err) throw err;
             res.json({token,payload})       

            });
        }else{

              return res.status(400).send({message : 'User Not found '})
        }

    }catch(err){

        console.log(err)
        res.status(500).send('Server Error')
    }

};
exports.register = async(req,res)=>{
   
    try{
        const{ username,password } = req.body;
         var user = await User.findOne({username});
         if(user){
                     
            return   res.status(400).send({message : "Username is duplicate"})
         }
         const salt = await bcrypt.genSalt(10);

         user = new User({
            username,
            password,
         });

         //Encrypt
         user.password = await bcrypt.hash(password, salt)
         await user.save()
         res.send("register success")



        
        
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }




} 
exports.listUser = async(req,res)=>{
  try{

          res.send('Get List User')

  }catch(err){

       console.log(err)
       res.status(500).send('Server error')

  }

}
exports.updateUser = async(req,res)=>{

     try{


     }catch(err){

            console.log(err)
            res.status(500).send('Server Error')

     }

}

exports.deleteUser = async(req,res)=>{

    try{

            
    }catch(err){

           console.log(err)
           res.status(500).send('Server Error')

    }

}