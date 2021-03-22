// This is only for testing purposes
// This is a test for the username
module.exports= function (app){
    const event = require('../Controllers/Events.Controller')
    app.get('/test-event',event.testEvent)
}

