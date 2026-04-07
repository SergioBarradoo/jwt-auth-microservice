const jwt = require("jsonwebtoken");

function generate(user){
 return jwt.sign({id:user}, "secret");
}
