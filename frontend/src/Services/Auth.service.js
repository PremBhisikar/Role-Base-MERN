import axios from "axios";
import { getInfo } from "./Auth.header";

const TOKEN = getInfo();

const API_URL = "http://localhost:3456/";

let axiosConfig = {
  header: {
    "Content-Type": "application/json",
    Authorization: TOKEN,
  },
};

// Webform
export const webdata = async (
  company_stand_for,
  organization_company_offers,
  describe_organization ,
  products_and_services,
  business_experience,
  company_based ,
  webisite_url,
  competitors_url ,
  target_audience,
  why_consumer_buy ,
  call_to_action,
  main_pages,
  menus_content,
  key_takeaway ,
  platform_you_want ,
  features,
  brand_book,
  budget,
  updating_and_maintaining,
  content_marketing,
  launch_date,
  SPOC_for_Info) => {
    // console.log("fname service",firstname);
    // console.log("fname service",lastname);
    // console.log("fname service",mobileno);
    // console.log("fname service",email);
    // console.log("fname service",password);
  // console.log("fname service",array);
  // firstname, lastname, mobileno, email, password, add_line1,add_line2,state,city
    
 return await axios.post(
      API_URL + "user/webdata",
      {
        company_stand_for,
        organization_company_offers,
        describe_organization ,
        products_and_services,
        business_experience,
        company_based ,
        webisite_url,
        competitors_url ,
        target_audience,
        why_consumer_buy ,
        call_to_action,
        main_pages,
        menus_content,
        key_takeaway ,
        platform_you_want ,
        features,
        brand_book,
        budget,
        updating_and_maintaining,
        content_marketing,
        launch_date,
        SPOC_for_Info
      },
      axiosConfig
    );
};

// Vidoeform
export const videodata = async (
  communication,
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
  signatur,
  action,
  scope_of_shoot,
  testimonial,
  video_duration,
) => {
     
      
 return await axios.post(
    API_URL + "user/videodata",
   {
  communication,
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
  signatur,
  action,
  scope_of_shoot,
  testimonial,
  video_duration,
 },
     axiosConfig
      );
};
    
// Login
export const login = async (email, password) => {
  // console.log("login service",email);
  // console.log("login service",password);
  try {
    const response = await axios.post(
      API_URL + "user/userlogin",
      {
        email,
        password,
      },
      axiosConfig
    );
    if (response.data.status === true) {
      localStorage.setItem("login", JSON.stringify(response.data));

      return response;
    } else {
      return response;
    }
  } catch (e) {
    return null;
  }
};

//list data webform
export const webdataList = async () => {
  return axios.get(
      API_URL + "user/webdatalist", axiosConfig
  )
}
// Get ID
export const webDataById = async (_id) => {
  // console.log("service _id", _id);
  return axios.get(
    API_URL + `user/webDataById?_id=${_id}`,
   
    axiosConfig
  );
};
export const deletewebform = async (_id) => {
  console.log(_id)
  return await axios.delete(API_URL + `user/deletewebform/${_id }`, axiosConfig)
}
// Update webdata
export const updatewebform = async (_id,
  company_stand_for  ,
  organization_company_offers ,
  describe_organization ,
  products_and_services ,
  business_experience ,
  company_based ,
  webisite_url ,
  competitors_url ,
  target_audience ,
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

) => {

  console.log(_id);
 
  return axios.post(
    API_URL + "user/updatewebform",
    {
      _id,
      company_stand_for  ,
      organization_company_offers ,
      describe_organization ,
      products_and_services ,
      business_experience ,
      company_based ,
      webisite_url ,
      competitors_url ,
      target_audience ,
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
    axiosConfig
  );
};

//video datalist
export const videodataList = async () => {
  return axios.get(
      API_URL + "user/videodatalist", axiosConfig
  )
}
// Get ID
export const videoDataById = async (_id) => {
  // console.log("service _id", _id);
  return axios.get(
    API_URL + `user/videoDataById?_id=${_id}`,
   
    axiosConfig
  );
}; 


export const updatevideoform = async (
  _id,
  communication  ,
    primary ,
    secondary ,
    age_group,
    academic_background ,
    occupation ,
    location ,
    single_minded_proposition ,
    support_the_SMP ,
    key_takeaways ,
    script_flow ,
    artist ,
    gender ,
    accent ,
    tone ,
    signature,
    action ,
    scope_of_shoot ,
    testimonial ,
    video_duration ,

) => {

  console.log(_id);
 
  return axios.post(
    API_URL + `user/updatevideoform?_id=${_id}`,
    {
      communication  ,
    primary ,
    secondary ,
    age_group,
    academic_background ,
    occupation ,
    location ,
    single_minded_proposition ,
    support_the_SMP ,
    key_takeaways ,
    script_flow ,
    artist ,
    gender ,
    accent ,
    tone ,
    signature,
    action ,
    scope_of_shoot ,
    testimonial ,
    video_duration ,
    },
    axiosConfig
  );
};
export const deletevideoform = async (_id) => {
  console.log(_id)
  return await axios.delete(API_URL + `user/deletevideoform/${_id }`, axiosConfig)
}