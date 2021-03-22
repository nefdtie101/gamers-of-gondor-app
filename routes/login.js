// Login handler
module.exports =function (app){
    const user =require('../Controllers/Users.Controller')
    app.post('/login-token',user.login)
}
