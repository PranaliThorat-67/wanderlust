const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
});

userSchema.plugin(passportLocalMongoose);   //passport - automatically adds username, hashing, salting, hash password

module.exports = mongoose.model("User", userSchema);