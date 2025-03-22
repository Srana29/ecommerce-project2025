const UserModel = require('./../models/user_model');
const bycrpt = require('bcrypt');

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
    },


    signIn: async function(req, res){
        try{
            const {email, password} = req.body;
            const foundUser = await UserModel.findOne({email:email});
            if(!foundUser){
                return res.json({success: false, message:"User not found."});
            }
            const passMatch = bycrpt.compareSync(password, foundUser.password);
            if(!passMatch){
                return res.json({success: false, message:"Password incorrect."});
            }
            return res.json({success: true, message:"User found.", data: foundUser});
        }catch(ex){
            return res.json({success: false, message:ex});
        }
    },

    updateUser: async function (req,res){
        try{
            const userId = req.params.id;
            const upatdeData = req.body;
            const updateUser = await UserModel.findOneAndUpdate(
                {_id: userId},
                upatdeData,
                {new: true}
            );
            if(!updateUser){
                throw "user not found!";
            }
            return res.json({success: true, data: updateUser, message:"User updated!"})
        }catch(ex){
            return res.json({success: false, message: ex});
        }
    }


};

module.exports = UserController;