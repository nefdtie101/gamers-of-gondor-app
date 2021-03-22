// This will verify the users email
module.exports = function (app){
    const user =require('../Controllers/Users.Controller')
    app.post('/verify',user.verify)
}
