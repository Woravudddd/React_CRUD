const express = require('express')
const router = express.Router() //router api 
const {register, listUser, updateUser, deleteUser,login ,authCurrent} = require('../controllers/auth') 

const { auth } = require('../middleware/auth')


//ROUTE


//API enpoint : http/localhost:3000/api/
//Method      : GET/PUT/POST/DELETE
//Access      : Publish 
router.get('/auth',listUser)

router.post('/register',register)

router.post('/login',login)

router.put('/auth',updateUser)


router.delete('/auth',deleteUser)

router.post('/authUser',auth, authCurrent)




module.exports = router //exprot api

