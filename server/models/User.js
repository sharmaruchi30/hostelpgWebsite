import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
    {
        name : {
            type : String ,
            required : true,
            min : 2,
        },
        username : {
            type: String,
            required : true,
            max: 50,
            unique: true,
        },
        email : {
            type : String ,
            required : true,
            max : 50,
            unique : true,
        },
        password : {
            type : String ,
            required : true,
            min : 5,
        },
       
        phone: {
            type: Number,
            min: 10,
            max: 10,
        },
        bookmarks: {
            type: Array,
            default: [],
        },
    },
    {timestamps: true}
);

const User = mongoose.model("User" , UserSchema );

export default User;