// This will update the verify path
module.exports = function (app){
    const user = require('../Controllers/Users.Controller');
    app.post('/code-verify',user.code)
}
