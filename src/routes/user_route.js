const UserRoutes = require('express').Router();
const UserController = require('./../controllers/user_controller');

UserRoutes.post("/createAccount", UserController.creatAccount);
UserRoutes.post("/signIn", UserController.signIn);
UserRoutes.put("/:id", UserController.updateUser);

module.exports = UserRoutes;