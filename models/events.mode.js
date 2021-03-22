// This is the user model
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Event schema
let EventSchema = Schema({
   EventName:{
       type:String,
       require:true
   },
   EventDescription:{
       type:String,
       require:true
   }
})
const Event = mongoose.model('Event',EventSchema);
module.exports=Event;
