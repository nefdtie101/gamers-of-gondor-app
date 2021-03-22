//This will get events for you .
module.exports = function (app){
    const event = require('../Controllers/Events.Controller')
    app.post('/get-events',event.GetEvent)
}
