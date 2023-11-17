import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import questionair from '../model/user_model';
import webform from '../model/webform_model';
import videoform from '../model/videoform_model';
import bcrypt from 'bcrypt';
import response from "../consts/response";
import { ObjectId } from "mongodb"


//register user
export const userSignUp = async(req,res) => {
    try{
    const userDetails = new questionair ({
        fullname : req.body.fullname,
        email : req.body.email,
        password: bcrypt.hashSync(req.body.password, 9),
        role: req.body.role,
    })
    const userData = await userDetails.save();
    if(userData){
    return res.send({
        status : true,
        message : "user successfully signup ",
        result : userData
    })}
}catch(e){
    throw e
}
}


export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Validate if user exist in our database
    const user = await questionair.findOne({ email });
    console.log("user", user);
    if (user && (await bcrypt.compare(password, user.password))) {
      user.password = undefined;
      // Create token
      const token = jwt.sign({ _id: user._id, email }, "prem_auth", {
        expiresIn: "9h",
      });
      
      // Update login time
      await questionair.findByIdAndUpdate(user._id, {
        last_active: null,
        last_login: new Date().toISOString().slice(0, 10),
        token,
      });
      const userResponse = {
        token,
        user,
      };
      console.log("sss", userResponse);
      return response.successResponse(
        res,
        200,
        userResponse,
       " MESSAGE.LOGIN_SUCCESS"
      );
    } else {
      return response.somethingErrorMsgResponse(
        res,
        404,
       " MESSAGE.INVALID_CREDENTIALS,"
      );
    }
  } catch (err) {
    console.log(err);
  }
};


//get user by ID
export const getUserById = async (req, res) => {
    try {
      var _id = req.query._id;
      var userDataa = await questionair.findById(_id)
      res.send({ "status": 200, "message": "Success", result: userDataa })
    }
    catch (e) {
      throw e
    }
}
// get all user list 
export const userList = async(req,res) =>{
    try{
        let Details = await questionair.find()
        res.send({status:true,message:"user list",result:Details})
    }
    catch(e){
        throw e
    }
}
//update user
export const updateUser = async (req, res) => {
    console.log("id", req.body.fullname);
    try {
      let data = {}
  
      if (req.body.fullname) {
        data.fullname = req.body.fullname;
      }
      if (req.body.lastname) {
        data.lastname = req.body.lastname;
      }
      const result = await questionair.findByIdAndUpdate(
        { _id: mongoose.Types.ObjectId(req.body._id) },
        { $set: data },
        { new: true }
      );
  
      if (!result) {
        res.send({
          status: false,
          statusCode: 400,
          message: "not success",
          result: result,
        });
      } else {
        res.send({
          status: true,
          statusCode: 200,
          message: "Successfully Updated",
          result: result,
        });
      }
    } catch (e) {
      throw e;
    }
}
//delete user
export const deleteUser = async(req,res) => {
    try{
        let _id = req.params._id
        console.log(_id)
        const User = await questionair.deleteOne({_id:mongoose.Types.ObjectId(_id)})
        if(User){
            res.send({
                status : true,
                message:"success",
                result:User
            })
        }
    }catch(e){
        throw e
    }
}


//webform APIs>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export const webdata = async (req, res) => {
  try{
  const webDetails = new webform ({
    company_stand_for : req.body.company_stand_for,
    organization_company_offers: req.body.organization_company_offers,
    describe_organization: req.body.describe_organization,
    products_and_services: req.body.products_and_services,
    business_experience: req.body.business_experience,
    company_based: req.body.company_based,
    webisite_url: req.body.webisite_url,
    competitors_url: req.body.competitors_url,
    target_audience: req.body.target_audience,
    why_consumer_buy: req.body.why_consumer_buy,
    call_to_action: req.body.call_to_action,
    main_pages: req.body.main_pages,
    menus_content: req.body.menus_content,
    key_takeaway: req.body.key_takeaway,
    platform_you_want: req.body.platform_you_want,
    features: req.body.features,
    brand_book: req.body.brand_book,
    budget: req.body.budget,
    updating_and_maintaining: req.body.updating_and_maintaining,
    content_marketing: req.body.content_marketing,
    launch_date: req.body.launch_date,
    SPOC_for_Info: req.body.SPOC_for_Info,
  })
  const webData = await webDetails.save();
  if(webData){
  return res.send({
      status : true,
      message : "data successfully saved ",
      result : webData
  })}
}catch(e){
  throw e
}
}
//webform data list
export const webdataList = async(req,res) =>{
  try{
      let Details = await webform.find()
      res.send({status:true,message:"data list",result:Details})
  }
  catch(e){
      throw e
  }
}
//webdata byID  
export const webDataById = async (req, res) => {
  try {
    var _id = req.query._id;
    var webDataa = await webform.findById(_id)
    res.send({ "status": 200, "message": "Success", result: webDataa })
  }
  catch (e) {
    throw e
  }
}
//update webform
export const updatewebform = async (req, res) => {
  const {
    company_stand_for,
    organization_company_offers ,
    describe_organization ,
    products_and_services ,
    business_experience ,
    company_based ,
    webisite_url ,
    competitors_url ,
    target_audience,
    why_consumer_buy ,
    call_to_action ,
    main_pages ,
    menus_content ,
    key_takeaway ,
    platform_you_want ,
    features ,
    brand_book ,
    budget ,
    updating_and_maintaining ,
    content_marketing ,
    launch_date ,
    SPOC_for_Info 
  } = req.body;
  const { _id } = req.query;
  
  try {
    const result = await webform.findByIdAndUpdate(
      _id,
      {
        $set: {
          company_stand_for  ,
          organization_company_offers ,
          describe_organization ,
          products_and_services ,
          business_experience ,
          company_based ,
          webisite_url ,
          competitors_url ,
          target_audience,
          why_consumer_buy ,
          call_to_action ,
          main_pages ,
          menus_content ,
          key_takeaway ,
          platform_you_want ,
          features ,
          brand_book ,
          budget ,
          updating_and_maintaining ,
          content_marketing ,
          launch_date ,
          SPOC_for_Info 
        },
      },
      {
        new: true,
      }
    );
    console.log("checkkkk", result);
    return response.successResponse(
      res,
      result,
      200,
      "MESSAGE.AGENT_UPDATE_SUCCESS"
    );
  } catch (error) {
    console.log(error);
    return response.somethingErrorMsgResponse(res, 500, error);
  }
};

//delete webform data
export const deletewebform = async(req,res) => {
  try{
      let _id = req.params._id
      console.log(_id)
      const User = await webform.deleteOne({_id:mongoose.Types.ObjectId(_id)})
      if(User){
          res.send({
              status : true,
              message:"success",
              result:User
          })
      }
  }catch(e){
      throw e
  }
}



// videoform APIs>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export const videodata = async (req, res) => {
  try{
  const videoDetails = new videoform ({
    communication : req.body.communication,
    primary: req.body.primary,
    secondary: req.body.secondary,
    age_group: req.body.age_group,
    academic_background: req.body.academic_background,
    occupation: req.body.occupation,
    location: req.body.location,
    single_minded_proposition: req.body.single_minded_proposition,
    support_the_SMP: req.body.support_the_SMP,
    key_takeaways: req.body.key_takeaways,
    script_flow: req.body.script_flow,
    artist: req.body.artist,
    gender: req.body.gender,
    accent: req.body.accent,
    tone: req.body.tone,
    signature: req.body.signature,
    action: req.body.action,
    scope_of_shoot: req.body.scope_of_shoot,
    testimonial: req.body.testimonial,
    video_duration: req.body.video_duration,
  })
  const videoData = await videoDetails.save();
  if(videoData){
  return res.send({
      status : true,
      message : "data successfully saved ",
      result : videoData
  })}
}catch(e){
  throw e
}
}
//videoform data list
export const videodataList = async(req,res) =>{
  try{
      let Details = await videoform.find()
      res.send({status:true,message:"data list",result:Details})
  }
  catch(e){
      throw e
  }
}
//videoform byID  
export const videoDataById = async (req, res) => {
  try {
    var _id = req.query._id;
    var videoData = await videoform.findById(_id)
    res.send({ "status": 200, "message": "Success", result: videoData })
  }
  catch (e) {
    throw e
  }
}
//update webform
// export const updatevideoform = async (req, res) => {
//   // console.log("id", req.body.company_stand_for);
//   try {
//     let data = {}

//     if (req.body.communication) {
//       data.communication = req.body.communication;
//     }
//     if (req.body.primary) {
//       data.primary = req.body.primary;
//     }
//     if (req.body.secondary) {
//       data.secondary = req.body.secondary;
//     }
//     if (req.body.age_group) {
//       data.age_group = req.body.age_group;
//     }
//     if (req.body.academic_background) {
//       data.academic_background = req.body.academic_background;
//     }
//     if (req.body.occupation) {
//       data.occupation = req.body.occupation;
//     }
//     if (req.body.location) {
//       data.location = req.body.location;
//     }
//     if (req.body.single_minded_proposition) {
//       data.single_minded_proposition = req.body.single_minded_proposition;
//     }
//     if (req.body.support_the_SMP) {
//       data.support_the_SMP = req.body.support_the_SMP;
//     }
//     if (req.body.key_takeaways) {
//       data.key_takeaways = req.body.key_takeaways;
//     }
//     if (req.body.script_flow) {
//       data.script_flow = req.body.script_flow;
//     }
//     if (req.body.artist) {
//       data.artist = req.body.artist;
//     }
//     if (req.body.gender) {
//       data.gender = req.body.gender;
//     }
//     if (req.body.accent) {
//       data.accent = req.body.accent;
//     }
//     if (req.body.tone) {
//       data.tone = req.body.tone;
//     }
//     if (req.body.signature) {
//       data.signature = req.body.signature;
//     }
//     if (req.body.action) {
//       data.action = req.body.action;
//     }
//     if (req.body.scope_of_shoot) {
//       data.scope_of_shoot = req.body.scope_of_shoot;
//     }
//     if (req.body.testimonial) {
//       data.testimonial = req.body.testimonial;
//     }
//     if (req.body.video_duration) {
//       data.video_duration = req.body.video_duration;
//     }
    
//     const result = await videoform.findByIdAndUpdate(
//       { _id: mongoose.Types.ObjectId(req.body._id) },
//       { $set: data },
//       { new: true }
//     );

//     if (!result) {
//       res.send({
//         status: false,
//         statusCode: 400,
//         message: "not success",
//         result: result,
//       });
//     } else {
//       res.send({
//         status: true,
//         statusCode: 200,
//         message: "Successfully Updated",
//         result: result,
//       });
//     }
//   } catch (e) {
//     throw e;
//   }
// }
export const updatevideoform = async (req, res) => {
  console.log("i am hereeee", req.body);
  const {
    communication ,
    primary,
    secondary,
    age_group,
    academic_background,
    occupation,
    location,
    single_minded_proposition,
    support_the_SMP,
    key_takeaways,
    script_flow,
    artist,
    gender,
    accent,
    tone,
    signature,
    action,
    scope_of_shoot,
    testimonial,
    video_duration,
  } = req.body;
  const _id  = req.query;
  // console.log("chexckckk", ObjectId(_id));
  
  try {
    const result = await videoform.findByIdAndUpdate(
      _id,
      {
        $set: {
    communication ,
    primary,
    secondary,
    age_group,
    academic_background,
    occupation,
    location,
    single_minded_proposition,
    support_the_SMP,
    key_takeaways,
    script_flow,
    artist,
    gender,
    accent,
    tone,
    signature,
    action,
    scope_of_shoot,
    testimonial,
    video_duration,
        },
      },
      {
        new: true,
      }
    );
    // console.log("checkkkk", result);
    return response.successResponse(
      res,
      result,
      200,
      "MESSAGE.AGENT_UPDATE_SUCCESS"
    );
  } catch (error) {
    console.log(error);
    return response.somethingErrorMsgResponse(res, 500, error);
  }
};
//delete videoform data
export const deletevideoform = async(req,res) => {
  try{
      let _id = req.params._id
      console.log(_id)
      const User = await videoform.deleteOne({_id:mongoose.Types.ObjectId(_id)})
      if(User){
          res.send({
              status : true,
              message:"success",
              result:User
          })
      }
  }catch(e){
      throw e
  }
}