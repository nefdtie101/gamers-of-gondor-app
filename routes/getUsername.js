// This is the get username to makes sure username is unique
module.exports = function (app){
    const user =require('../Controllers/Users.Controller')
    app.post('/get-user',user.getUsername)
}
