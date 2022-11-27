const mongoose = require('mongoose')
const auth = require('../middlewares')
const User  = require('../models/User')
const router  = require('express').Router()



// @all users
// @ private
router.get('/all',auth, async(req,res)=>{
    try {
     const users = await User.find()
     return res.status(200).json({status : true , msg : "All users" , data : users})
    }
    catch(err){
        return res.status(500).json({status : false , msg : err})
    }
})


module.exports = router
