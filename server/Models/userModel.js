import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    password: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobileno: String,
    profilePicture: String,
    followers: [],
    about: String,
    linkedin: String,
    github: String,
    twitter: String,
    facebook: String,
    instagram: String,
    website: String,
    highestEducation: String,
    whatDoYouDo: String,
    intrests: [],

},
    { timestamps: true } // this will add createdAt and updatedAt fields to the schema    
);

const UserModel = mongoose.model('User', userSchema);
export default UserModel;