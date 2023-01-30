const Jwt = require('jsonwebtoken')

exports.auth = (req,res,next) => 
    {
        try{
            const token = req.headers["authtoken"]
            
            if(!token){
                return res.status(401).send('token not found, authorization denied')

            }
            const decoded = Jwt.verify(token,"Jwt Secret")
            console.log(decoded);
            //req.user = decode.user
                next()
        }catch(err){
            console.log(err)
            res.send(401).send('Token invalid')

        }


    }