
const {body}=require('express-validator')
const validationCheck=[
    body('email','Please enter a valid email').isEmail(),
    body('password','must be at least 6 characters').isLength({min:6})

]
module.exports=validationCheck