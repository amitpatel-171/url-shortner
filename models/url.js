import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortId:{
        type: String,
         
        unique: true,
    },
    redirectUrl:{
        type: String,
        required: true,
    },
    visitHistroy:[ {
        timeStamp:{type: Number,}

    }]
},
{timestamps: true}
);

const URL= mongoose.model('url', urlSchema);

export default URL;