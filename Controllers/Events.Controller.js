const Event = require('../models/events.mode');
const jwt = require('jsonwebtoken')

//This will create a new event
exports.newEvent = function (req,res) {
    const auth = req.headers['authorization']
    const token = auth.split(' ')[1]
    const decoded = jwt.verify(token, 'ghoufkuygghjf')
    if(decoded.Admin===true){
        const event = new Event({
            EventName: req.body.EventName,
            EventDescription: req.body.EventDescription
        });
        event.save()
            .then((result) => {
                console.log('send')
            })
            .catch((err) => {
                console.log(err)
            })
    }

}
//This will get all the existing events
exports.GetEvent =function (req,res){
    Event.find()
        .then((result)=>res.send(result))
}
//This will delete a event
exports.DeleteEvent=function (req,res){
    Event.findByIdAndDelete(req.body.id,)
        .then(res.send('file deleted'))
}
//This is only for testing purposes
exports.testEvent= function (req,res){
    User.findOne({UserName:req.query.EventName},function (err,result){
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
