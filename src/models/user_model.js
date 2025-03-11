const {Schema, model} = require('mongoose');
const uuid = require('uuid');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    id: {type: String, unique: true},
    fullName: {type: String, default:"ABC"},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    phoneNumber: {type: Number, default:1234567890},
    address: {type: String, default:""},
    state: {type: String, default:""},
    city: {type: String, default:""},
    profileProgress: {type: Number, default:""},
    updatedOn: {type: Date},
    createdOn: {type: Date},
});

userSchema.pre('save', function(next){
    this.id = uuid.v4();
    this.updatedOn = new Date();
    this.createdOn = new Date();

    // hash password 123456678 dfkjgnsdeideu47545858nffn
    const salt = bcrypt.genSaltSync(10);  //4r89348rh34fn48fh4u
    const hash = bcrypt.hashSync(this.password, salt);
    this.password = hash;

    next();
});

const UserModel = model('User',userSchema);

module.exports = UserModel;