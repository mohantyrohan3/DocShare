import express from 'express'
const router = express.Router()
import User from '../models/user.js';
import { hashSync } from 'bcrypt'
import passport from 'passport';
import "../config/passport.js"
// import filerouter from "./file.js"


// Welcome Route
router.get('/',(req,res)=>{
    res.send({
        msg:"Welcome to Api of DocShare"
    })
})



// Register route
router.post('/register',function(req,res){
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:hashSync(req.body.password , 10)
    });

    newUser.save()
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to create user' });
    });
})




// Login route
router.post('/login', passport.authenticate('local', { failureRedirect: '/api/failed' }), (req,res)=>{
    res.send({
        msg:'You are Successfully Logged In'
    })
})



router.get("/failed",(req,res)=>{
    res.send({
        msg:'Failed to Log In'
    })
})





// Logout Route
router.get('/logout', function(req, res) {
    req.logout(function(err) {
      if (err) {
        res.send({
            msg:'Error',
            err:err
        })
        return;
      }
      else{
        res.send({
            msg:"Successfully Logged Out"
        })
      }
    });
  });



// get Details route
router.get('/details',(req,res)=>{
    if(req.isAuthenticated()){
        res.send({
            status:"Authenticated",
            user:req.user
        })
    }

    else{
        res.send({
            status:"Not Authenticated"
        })
    }
  })





// router.use('/file',filerouter)









export default router


