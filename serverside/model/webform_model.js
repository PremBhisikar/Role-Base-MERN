import mongoose from "mongoose";
const webSchema = new mongoose.Schema(
    {
        company_stand_for : {
            type : String,
            required : true
        },
        organization_company_offers : {
            type : String,
            required : true
        },
        describe_organization : {
            type: [String],
            required : true
        },
        products_and_services : {
            type: String,
            required : true
        },
        business_experience  : {
            type: String,
            required : true
        },
        company_based: {
            type: String,
            required : true
        },
        webisite_url: {
            type: String,
            required : true
        },
        competitors_url: {
            type: String,
            required : true
        },
        target_audience:{
            type: String,
            required : false
        },
        why_consumer_buy: {
            type: String,
            required : false
        },
        call_to_action: {
            type: String,
            required : false
        },
        main_pages: {
            type: String,
            required : false
        },
        menus_content: {
            type: String,
            required : false
        },
        key_takeaway: {
            type: String,
            required : false
        },
        platform_you_want: {
            type: String,
            required : false
        },
        features: {
            type: String,
            required : false
        },
        brand_book: {
            type: String,
            required : false
        },
        budget :{
            type: String,
            required : false
        },
        updating_and_maintaining: {
            type: String,
            required : false
        },
        content_marketing: {
            type: String,
            required : false
        },
        launch_date: {
            type: String,
            required : false
        },
        SPOC_for_Info: {
            type: String,
            required : false
        }
    }
)
export default mongoose.model("webform",webSchema);