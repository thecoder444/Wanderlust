const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose")

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
    }
});

userSchema.plugin(passportLocalMongoose);// ye plugin username,hashing,salting aur hash password automatically store kar dega

module.exports =  mongoose.model("User", userSchema)
