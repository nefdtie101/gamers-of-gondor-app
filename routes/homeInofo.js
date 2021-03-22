//This is the home info function
module.exports = function (app){
    const user =require('../Controllers/Users.Controller')
    app.post('/home-info',user.homeInfo)
}
