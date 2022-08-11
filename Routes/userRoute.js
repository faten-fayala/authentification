const express=require('express')
const router=express.Router()
const userController=require('../Controllers/userController')
const validationCheck=require('../Middlewares/dataCheckMiddleware')
router.post('/register',validationCheck,userController.register)

router.post('/login',validationCheck,userController.login)



module.exports=router