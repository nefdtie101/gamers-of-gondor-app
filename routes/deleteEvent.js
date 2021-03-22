//This module will delete a events
module.exports = function (app){
    const event = require('../Controllers/Events.Controller')
    app.post('/delete-event',event.DeleteEvent)
}
