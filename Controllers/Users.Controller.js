// This is the users controller file
const User = require('../models/user.models');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const nodemailer = require("nodemailer")

// This will add new user to the database
exports.addUser = function (req,res){
    const user = new User ({
        UserName:req.body.UserName,
        Password:req.body.Password,
        Email:req.body.Email,
        Admin:false,
        Verified:false,
    });
    // Save object to database
    user.save()
        .then((result)=>{
            res.send('User created')
        })
        .catch((err)=>{
            console.log(err)
        })
}
//Check if username exists
exports.getUsername = function (req,res){
    User.findOne({UserName:req.body.UserName},function (err,result){
        if(err){
            console.log(err)
        }
        else{
            if(result===null){
                res.send(JSON.stringify({UserDoesNotExist:true}))
            }
            else {
                res.send(JSON.stringify({UserDoesNotExist:false}))
            }
        }
    })
}
//This is the login function
exports.login=function (req,res){
    const user = {UserName:req.body.UserName}
    User.findOne(user)
        .then((result)=>{
            // If password is correct
            if(req.body.Password === result.Password){
              let payload ={
                  'UserName':result.UserName,
                  'Admin':result.Admin
              }
              const token = jwt.sign(JSON.stringify(payload),'ghoufkuygghjf',{algorithm:'HS256'})
                  res.send(JSON.stringify({'token':token}))
            }
            //This is what will happen if password is incorrect
            else {
                res.send(JSON.stringify({'token':'error'}))

            }
        })
        .catch((err)=>{
            res.send({'token':'error'})
            }
        )
}
//Verify user send email
exports.verify = function (req,res){
    const random = Math.floor(Math.random() * 100 + 200)
    //Generating random four digit code to verify email
    User.findOneAndUpdate({Email:req.body.mail},{Code:random},{new:true} , function (err){
        if(err){
            console.log(err)
        }
    })
    // Creating connection to smtp server
    const transporter = nodemailer.createTransport({
        host:'//smtp credentials',
        port:587,
        secure:false,
        auth:{
            user:"//smtp credentials ",
            pass:"//smtp credentials"
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    //creating message
    let mailOptions = {
        from:'verify@nefdtco.co.za',
        to:req.body.mail,
        subject:'Please verify email',
        text:`This is your code ${random}`
    }
    //Sending mail
    transporter.sendMail(mailOptions)
        .then(res.send('mail sent'))


}
//Verify email check code
exports.code=function (req,res){
    User.findOne({Email:req.body.mail})
        .then(result=>{
            if(result.Code===parseFloat(req.body.code)){
                User.findOneAndUpdate({Email:req.body.mail},{Verified:true},{new:true},function (err){
                    if(err){
                        console.log(err)
                    }
                })
            }
            else{console.log('oops')}
        })
}
// This will load homeScreen info
exports.homeInfo= function (req,res){
    const auth = req.headers['authorization']
    const token = auth.split(' ')[1]

    try {
        const decoded = jwt.verify(token, 'ghoufkuygghjf')
        User.findOne({UserName: decoded.UserName}, function (err, result) {
            if (err) {
                res.send(err)
            } else {
                let steam;
                let epic;
                let ubisoft;
                let Origin
                let Discord
                //check if fields have values
                if(result.SteamUser===null){
                    steam = '?';
                }
                else{
                    steam = result.SteamUser
                }
                if(result.EpicUser===null){
                    epic = '?';
                }
                else{
                    epic = result.EpicUser
                }
                if(result.UbisoftUser===null){
                    ubisoft = '?';
                }
                else{
                    ubisoft = result.UbisoftUser
                }
                if(result.OriginUser===null){
                    Origin = '?';
                }
                else{
                    Origin = result.OriginUser
                }
                if(result.DiscordUser===null){
                    Discord = '?';
                }
                else{
                    Discord = result.DiscordUser
                }
                let sendThis = {
                    'UserName': result.UserName,
                    'Verified': result.Verified,
                    'Admin': result.Admin,
                    'Email':result.Email,
                    'SteamUser':steam,
                    'EpicUser':epic,
                    'UbisoftUser':ubisoft,
                    'OriginUser':Origin,
                    'DiscordUser':Discord
                }
                res.send(JSON.stringify(sendThis))

            }
        })

    } catch (err){
        console.log(err)
    }

}
// This will update info on database
exports.updateInfo=function (req,res){
    const auth = req.headers['authorization']
    const token = auth.split(' ')[1]
    try {
        const decoded = jwt.verify(token, 'ghoufkuygghjf')
        const WhatToUpdate = req.body.id
       if(WhatToUpdate==='SteamUser'){
           User.findOneAndUpdate({UserName:decoded.UserName},{SteamUser:req.body.update},{new:true},function (err){
               if(err){
                   console.log(err)
               }
               console.log('updated')
           })
       }
       else if(WhatToUpdate==='EpicUser'){
           User.findOneAndUpdate({UserName:decoded.UserName},{EpicUser:req.body.update},{new:true},function (err){
               if(err){
                   console.log(err)
               }
               console.log('updated')
           })
       }
       else if(WhatToUpdate==='UbisoftUser'){
           User.findOneAndUpdate({UserName:decoded.UserName},{UbisoftUser:req.body.update},{new:true},function (err){
               if(err){
                   console.log(err)
               }
               console.log('updated')
           })
       }
       else if(WhatToUpdate==='OriginUser'){
           User.findOneAndUpdate({UserName:decoded.UserName},{OriginUser:req.body.update},{new:true},function (err){
               if(err){
                   console.log(err)
               }
               console.log('updated')
           })
       }
       else if(WhatToUpdate==='DiscordUser'){
           User.findOneAndUpdate({UserName:decoded.UserName},{DiscordUser:req.body.update},{new:true},function (err){
               if(err){
                   console.log(err)
               }
               console.log('updated')
           })
       }
       else if(WhatToUpdate==='Password'){
           User.findOneAndUpdate({UserName:decoded.UserName},{Password:req.body.update},{new:true},function (err){
               if(err){
                   console.log(err)
               }
               console.log('updated')
           })
       }

    } catch (err){
        console.log(err)
    }
}
// This is only for testing purposes
exports.testUsername= function (req,res){
    User.findOne({UserName:req.query.UserName},function (err,result){
        if(err){
            console.log(err)
        }
        else{
            if(result===null){
                res.send(JSON.stringify({UserDoesNotExist:true}))
            }
            else {
                res.send(JSON.stringify({UserDoesNotExist:false}))
            }
        }
    })
}
