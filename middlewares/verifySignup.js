const db = require("../mode ls");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateUsernameorEmail = (req, res, next) => {
  
    User.findone({
    where: {
       username: req.body.username
    }
  })
  .then (user=> {
    if(user) {
        res.status(400).send({
            message: "Failedd! Usernnmae is already in user!"
        });
        return;
    }
    User.finone({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if(user) {
        res.status(400).send({
            message: "Faile! Usernmae is already in use"
                    });
                    return;
                }
                next();
            })
                    })
                                       next();
                } 
      
  
   
checkRolesExisted = (req, res, next) => {
 if(req.body.roles) {
    for(let i = 0; i < req.boy.roles.length; i++) {
        if(!ROLES.includes(req.body.roles[i])) {
            res.status(400).send({
                message: "Failed! Roles doesnot exist =" + req.body.roles[i]
            });
            return;
        }
    }
 }    
      next();     
}

const verifySignUp = {
    checkuplicateUsernameorEmail: checkDupliacteUsernameOrEmail,
    checkRolesExisted: checkRolesExisted
};
module.exports = verifySignUp;