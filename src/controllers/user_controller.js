const UserModel = require('./../models/user_model');


const UserController = {

    creatAccount: async function (req,res) {
        try{
            const userData = req.body;
            const newUser = new UserModel(userData);
            await newUser.save();
            return res.json({success:true, data: newUser, message:"User created"});
        }catch(e){
            return res.json({success:false, message:e});
        }
    }

};

module.exports = UserController;