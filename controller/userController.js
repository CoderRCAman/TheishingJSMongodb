 const User = require('../model/userModel') ;
 async function  createUser (req,res) { // req,res is coming from express
    const {email, password , name} =  req.body ; 
    console.log(req.body) ;
    try {
        const newUser = new User ({
            name : name ,
            email : email , 
            password :password
        }) 
        await newUser.save() ;
        return res.render('Success')
    } catch (error) {
        console.log(error) ;
        return res.status(500).json({msg:'Internal Server Error!'}) ;
    }
 } 

async function getCreateUserPage ( req,res) {
    res.render('GetCreateUserPage')
}


module.exports = {createUser , getCreateUserPage}