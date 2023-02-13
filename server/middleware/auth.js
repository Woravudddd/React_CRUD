const jwt = require('jsonwebtoken')

exports.auth = (req,res,next) => 
    {
        try{
           // const token = req.headers["authtoken"]
          
            const token = req.headers['authtoken']
            
            console.log('this is token ' +token)
            
            if(!token){
                console.log('token not found')
                return res.status(401).send('token not found, authorization denied')

            }
           
            const decoded = jwt.verify( token , "secret" )

          

            console.log('this is de decode',decoded);
 
            next()
            
            //req.user = decode.user
           
        }catch(err){
            console.log(err)
            res.status(401).send('Token invalid')

        }


    }