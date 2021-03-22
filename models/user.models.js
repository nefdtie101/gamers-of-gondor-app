// This is the user model
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//creating user schema
let UserSchema = Schema({
    UserName:{
        type:String,
        require:true,
        unique:true
    },
    Password:{
        type:String,
        require: true
    },
    Email:{
        type:String,
        require:true,
        lowercase:true,
        unique:true
    },
    Admin:{
        type:Boolean,
        require:true
    },
    Verified:{
        type:Boolean,
        require:true
    },
    Code:{
        type:Number,
        require:false
    },
    SteamUser:{
      type:String,
      require:false
    },
    EpicUser:{
        type:String,
        require:false
    },
    UbisoftUser:{
        type:String,
        require:false
    },
    OriginUser:{
        type:String,
        require:false
    },
    DiscordUser:{
        type:String,
        require:false
    }

})
const User = mongoose.model('User',UserSchema);
module.exports=User;

