// This is the function that will add user to the database
module.exports =function (app){
    const user = require('../Controllers/Users.Controller');
    app.post('/add-user',user.addUser)
}
