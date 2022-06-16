const controller = require("../controllers/auth.controller");
const { verifySignUp } = require("../midlewares");

module.exports = function(app) {

    
    app.post("/ecom/api/v1/auth/signup", [verifySignUp.checkDuplicateUsernmaeorEmail, verifySignup.checkRolesExisted] , controller.signup);
    app.post("/ecom/api/v1/auth/signin", controller.signin);
};

