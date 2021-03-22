// This is a test for the username
module.exports= function (app){
    const user = require('../Controllers/Users.Controller')
    app.get('/test-user',user.testUsername)
}
