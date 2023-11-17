import mongoose from "mongoose";
const videoSchema = new mongoose.Schema(
    {
        communication : {
            type : String,
            required : true
        },
        primary : {
            type : String,
            required : true
        },
        secondary : {
            type : String,
            required : true
        },
        age_group : {
            type : String,
            required : true
        },
        academic_background : {
            type : String,
            required : true
        },
        occupation : {
            type : String,
            required : true
        },
        location  : {
            type : String,
            required : true
        },
        single_minded_proposition : {
            type : String,
            required : false
        },
        support_the_SMP : {
            type : String,
            required : false
        },
        key_takeaways : {
            type : String,
            required : false
        },
        script_flow : {
            type : String,
            required : false
        },
        artist  : {
            type : String,
            required : false
        },
        gender: {
            type: String,
            enum: ["Male", "Female"], 
            required: true
        },
        accent: {
            type: String,
            enum: ["Neutral", "US", "Other"], 
            required: true
        },
        tone : {
            type: String,
            enum: ["Formal or Professional", "Casual yet Informative", "Other"], 
            required: true
        },
        signature: {
            type : String,
            required : false
        },
        action  : {
            type : String,
            required : false
        },
        scope_of_shoot  : {
            type : String,
            required : false
        },
        testimonial  : {
            type : String,
            required : false
        },
        video_duration  : {
            type : String,
            required : false
        }
    }
)
export default mongoose.model("videoform",videoSchema);