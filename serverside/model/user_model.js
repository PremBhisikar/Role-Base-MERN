import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
        fullname : {
            type : String,
            required : true
        },
        email : {
            type : String,
            required : true
        },
        password : {
            type : String,
            required : true
        },
        role: {
            type: String,
            enum: ["admin", "video", "web"],
        }
    }
)
export default mongoose.model("questionair",userSchema);