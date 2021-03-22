// This module will create a event
module.exports = function (app){
    const event = require('../Controllers/Events.Controller')
    app.post('/add-event',event.newEvent)
}
