// Tis is the function to update usernameInfo
module.exports = function (app){
    const user =require('../Controllers/Users.Controller')
    app.post('/update-this',user.updateInfo)
}
