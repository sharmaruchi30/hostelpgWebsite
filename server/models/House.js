import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
    {
        userId : {
            type : String,
            required : true,
        },
        category : {
            type :String ,
            required : true,
        },
        no_of_rooms : {
            type : Number,
            required : true,
        },
        no_of_bathrooms : {
            type: Number,
            required: true
        },
        food_categories : {
            type : Array,
            required : true,
        },
        image_path : {
            type : Array,
            required : true,  
        },
        price : {
            type: Number,
            required: true,
        },
        description : {
            type : String,
            min : 10,
        },
        
        location :
            {
                area: String,
                city: String,
                state: String,
            }
        ,
        reviews: [
            {
                userId: String,
                comment: String,
            }
        ]
    },
    // { collection : 'House' },
    {timestamps: true}
    
);

const House = mongoose.model("House" , UserSchema );

export default House;