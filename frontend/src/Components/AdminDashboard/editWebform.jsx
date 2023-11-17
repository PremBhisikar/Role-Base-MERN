// import React, { useState, useEffect } from "react";
// import { useParams,useNavigate } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import { updatewebform, webDataById } from "../../Services/Auth.service";

import "../Pages/home.css";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { webdata, webDataById } from '../../Services/Auth.service';
import { useNavigate } from "react-router-dom";
export default function Webformedit() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    company_stand_for :"" ,
    organization_company_offers: "",
    describe_organization:"" ,
    products_and_services: "",
    business_experience: "",
    company_based:"" ,
    webisite_url: "",
    competitors_url:"" ,
    target_audience: "",
    why_consumer_buy:"" ,
    call_to_action: "",
    main_pages: "",
    menus_content: "",
    key_takeaway:"" ,
    platform_you_want:"" ,
    features:"" ,
    brand_book: "",
    budget: "",
    updating_and_maintaining:"" ,
    content_marketing: "",
    launch_date: "",
    SPOC_for_Info: ""
  });
  console.log("data=====>", data);
  
  // Define the current step
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const signuphandler = async () => {
    const apiResponse = await webdata(
      data.company_stand_for,
      data.organization_company_offers,
      data.describe_organization,
      data.products_and_services,
      data.business_experience,
      data.company_based,
      data.webisite_url,
      data.competitors_url,
      data.target_audience,
      data.why_consumer_buy,
      data.call_to_action,
      data.main_pages,
      data.menus_content,
      data.key_takeaway,
      data.platform_you_want,
      data.features,
      data.brand_book,
      data.budget,
      data.updating_and_maintaining,
      data.content_marketing,
      data.launch_date, 
      data.SPOC_for_Info
    );
     console.log("apiResponse", apiResponse);
    setLoading(true);
    if (apiResponse.data.status === true) {
      toast.info(
        "Signup Successfully.",
        {
          position: toast.POSITION.TOP_CENTER,
        },
        { autoClose: 1000 }
      );
      setTimeout(() => {
        navigate("/thankyou");
      }, 1000);
    } else {
      toast.error(
        "Signup unSuccessfully.",
        {
          position: toast.POSITION.TOP_RIGHT,
        },
        { autoClose: 1000 }
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((previousValue) => ({
      ...previousValue,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Validation functions here...
  const [valid, setValid] = useState({
    company_stand_for :"false" ,
    organization_company_offers: "false",
    describe_organization:"false" ,
    products_and_services: "false",
    business_experience: "false",
    company_based:"false" ,
    webisite_url: "false",
    competitors_url:"false" ,
    target_audience: "false",
    why_consumer_buy:"false" ,
    call_to_action: "false",
    main_pages: "false",
    menus_content: "false",
    key_takeaway:"false" ,
    platform_you_want:"false" ,
    features:"false" ,
    brand_book: "false",
    budget: "false",
    updating_and_maintaining:"false" ,
    content_marketing: "false",
    launch_date: "false",
    SPOC_for_Info: "false",

    company_stand_forError :"" ,
    organization_company_offersError: "",
    describe_organizationError:"" ,
    products_and_servicesError: "",
    business_experienceError: "",
    company_basedError:"" ,
    webisite_urlError: "",
    competitors_urlError:"" ,
    target_audienceError: "",
    why_consumer_buyError:"" ,
    call_to_actionError: "",
    main_pagesError: "",
    menus_contentError: "",
    key_takeawayError:"" ,
    platform_you_wantError:"" ,
    featuresError:"" ,
    brand_bookError: "",
    budgetError: "",
    updating_and_maintainingError:"" ,
    content_marketingError: "",
    launch_dateError: "",
    SPOC_for_InfoError: "",
  });

  const validatecompany_stand_for = (company_stand_for) => {
    if (company_stand_for.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        company_stand_for: true,
        company_stand_forError: "Please enter company_stand_for",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        company_stand_for: false,
        company_stand_forError: "",
      }));
    }
  };

  const validateorganization_company_offers = (organization_company_offers) => {
    if (organization_company_offers.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        organization_company_offersError: true,
        organization_company_offersError: "Please enter organization_company_offers",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        organization_company_offers: false,
        organization_company_offersErrorError: "",
      }));
    }
  };

  const validateproducts_and_services = (products_and_services) => {
    if (products_and_services.length < 1) {
      setValid((previousValue) => ({
        ...previousValue,
        products_and_services: true,
        products_and_servicesError: "Enter your correct products_and_services",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        products_and_services: false,
        products_and_servicesError: "",
      }));
    }
  };

  const validatebusiness_experience = (business_experience) => {
    if (business_experience.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        business_experience: true,
        business_experienceError: "Please enter business_experience",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        business_experience: false,
        business_experienceError: "",
      }));
    }
  };

  const validatecompany_based = (company_based) => {
    if (company_based.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        company_based: true,
        company_basedError: "Please enter company_based",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        company_based: false,
        company_basedError: "",
      }));
    }
  };

  const validatetarget_audience = (target_audience) => {
    if (target_audience.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        target_audience: true,
        target_audienceError: "Please enter target_audience",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        target_audience: false,
        target_audienceError: "",
      }));
    }
  };

  const validatewhy_consumer_buy = (why_consumer_buy) => {
    if (why_consumer_buy.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        why_consumer_buy: true,
        why_consumer_buyError: "Please enter why_consumer_buy",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        why_consumer_buy: false,
        why_consumer_buyError: "",
      }));
    }
  };

  const validatecall_to_action = (call_to_action) => {
    if (call_to_action.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        call_to_action: true,
        call_to_actionError: "Please enter call_to_action",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        call_to_action: false,
        call_to_actionError: "",
      }));
    }
  };
  const validatemain_pages = (main_pages) => {
    if (main_pages.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        main_pages: true,
        main_pagesError: "Please enter main_pages",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        main_pages: false,
        main_pagesError: "",
      }));
    }
  };const validatemenus_content = (menus_content) => {
    if (menus_content.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        menus_content: true,
        menus_contentError: "Please enter menus_content",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        menus_content: false,
        menus_contentError: "",
      }));
    }
  };const validatekey_takeaway = (key_takeaway) => {
    if (key_takeaway.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        key_takeaway: true,
        key_takeawayError: "Please enter key_takeaway",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        key_takeaway: false,
        key_takeawayError: "",
      }));
    }
  };const validateplatform_you_want = (platform_you_want) => {
    if (platform_you_want.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        platform_you_want: true,
        platform_you_wantError: "Please enter platform_you_want",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        platform_you_want: false,
        platform_you_wantError: "",
      }));
    }
  };const validatebrand_book = (brand_book) => {
    if (brand_book.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        brand_book: true,
        brand_bookError: "Please enter brand_book",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        brand_book: false,
        brand_bookError: "",
      }));
    }
  };const validatebudget = (budget) => {
    if (budget.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        budget: true,
        budgetError: "Please enter budget",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        budget: false,
        budgetError: "",
      }));
    }
  };
  const validateupdating_and_maintaining = (updating_and_maintaining) => {
    if (updating_and_maintaining.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        updating_and_maintaining: true,
        updating_and_maintainingError: "Please enter updating_and_maintaining",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        updating_and_maintaining: false,
        updating_and_maintainingError: "",
      }));
    }
  };
  const validatecontent_marketing = (content_marketing) => {
    if (content_marketing.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        content_marketing: true,
        content_marketingError: "Please enter content_marketing",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        content_marketing: false,
        content_marketingError: "",
      }));
    }
  };
  const validatefeatures = (features) => {
    if (features.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        features: true,
        featuresError: "Please enter features",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        features: false,
        featuresError: "",
      }));
    }
  };
  const validatewebisite_url = (webisite_url) => {
    if (webisite_url.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        webisite_url: true,
        webisite_urlError: "Please enter webisite_url",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        webisite_url: false,
        webisite_urlError: "",
      }));
    }
  };
  const validatecompetitors_url = (competitors_url) => {
    if (competitors_url.length === 0) {
      setValid((previousValue) => ({
        ...previousValue,
        competitors_url: true,
        competitors_urlError: "Please enter competitors_url",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        competitors_url: false,
        competitors_urlError: "",
      }));
    }
  };
  const validateSPOC_for_Info = (SPOC_for_Info) => {
    if (SPOC_for_Info.length === 0) {
      setValid((previousValue) => ({
        ...previousValue,
        SPOC_for_Info: true,
        SPOC_for_InfoError: "Please enter SPOC_for_Info",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        SPOC_for_Info: false,
        SPOC_for_InfoError: "",
      }));
    }
  };
  const validatelaunch_date = (launch_date) => {
    if (launch_date.length === 0) {
      setValid((previousValue) => ({
        ...previousValue,
        launch_date: true,
        launch_dateError: "Please enter launch_date",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        launch_date: false,
        launch_dateError: "",
      }));
    }
  };

  useEffect(() => {
    const showList = async () => {
      const result = await webDataById("652f6fa57205e41aba8df713");
      const payload=result.data.result
      setData({
        company_stand_for :payload.company_stand_for ,
        organization_company_offers:payload.organization_company_offers,
        describe_organization:payload.describe_organization ,
        products_and_services:payload.products_and_services ,
        business_experience:payload.business_experience ,
        company_based:payload.company_based ,
        webisite_url: payload.webisite_url,
        competitors_url: payload.competitors_url,
        target_audience: payload.target_audience,
        why_consumer_buy: payload.why_consumer_buy,
        call_to_action:payload.call_to_action ,
        main_pages: payload.main_pages,
        menus_content: payload.menus_content,
        key_takeaway: payload.key_takeaway,
        platform_you_want: payload.platform_you_want,
        features: payload.features,
        brand_book:payload.brand_book,
        budget:payload.budget,
        updating_and_maintaining:payload. updating_and_maintaining,
        content_marketing:payload.content_marketing ,
        launch_date: payload.launch_date,
        SPOC_for_Info: payload.SPOC_for_Info



      })

      console.log("arrrrrayyy===>>",result.data.result);
    };
    showList();
  }, []);
  console.log("nput================>", data)
  

  return (
    <div>
      <div className="form-gap"></div>
      <div className="container">
        <div className="text-center">
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-12 col-sm-offset-2 col-md-offset-3 g-4">
              <form role="form" onSubmit={(e) => handleSubmit(e)}>
                <h3 className="headtext text-center">LET US HELP</h3>
                <hr className="colorgraph" />

                {currentStep === 1 && (
                  <div>
                    {/* Step 1 fields */}
                    {/* ... */}
                    <div className="row g-4">
                      <div className="col-xs-12 text-start fw-semibold">
                        <label>
                          Please share what your organization or company stands
                          for
                        </label>
                        <div className="form-group">
                          <input
                            type="text"
                            name="company_stand_for"
                            id="company_stand_for"
                            className="form-control input-lg"
                            placeholder="Please enter your name of your organization / company"
                            value={data.company_stand_for}
                            onBlur={(e) => validatecompany_stand_for(e.target.value)}
                            onChange={handleChange}
                          />
                          {valid.company_stand_for && (
                            <span className="text-danger">
                              {valid.company_stand_forError}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-xs-12 text-start fw-semibold ">
                        <label>
                          Brief Summary & USP of what your organization/company
                          Offers
                        </label>
                        <div className="form-group">
                          <input
                            type="text"
                            name="organization_company_offers"
                            id="last_name"
                            className="form-control input-lg"
                            placeholder="Share a Brief Summary & USP of what your organization/company Offers"
                            value={data.organization_company_offers}
                            onBlur={(e) => validateorganization_company_offers(e.target.value)}
                            onChange={handleChange}
                          />
                          {valid.organization_company_offers && (
                            <span className="text-danger">
                              {valid.organization_company_offersError}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="col-xs-12 text-start fw-semibold">
                    <label>
                      Check the box(es) that best describes your organization: (Please tick mark)
                    </label>
                    <div className="form-group">
                      <div>
                        <label>
                          <input
                            type="checkbox"
                            name="describe_organization"
                            value="Non-profit organization"
                            onChange={handleChange}
                          />
                          Non-profit organization
                        </label>
                      </div>
                      <div>
                        <label>
                          <input
                            type="checkbox"
                            name="describe_organization"
                            value="On-line community"
                            onChange={handleChange}
                          />
                          On-line community
                        </label>
                      </div>
                      <div>
                        <label>
                          <input
                            type="checkbox"
                            name="describe_organization"
                            value="Start-up"
                            onChange={handleChange}
                          />
                          Start-up
                        </label>
                      </div>
                      <div>
                        <label>
                          <input
                            type="checkbox"
                            name="describe_organization"
                            value="Large business (over 100 employees)"
                            onChange={handleChange}
                          />
                          Large business (over 100 employees)
                        </label>
                      </div>
                      <div>
                        <label>
                          <input
                            type="checkbox"
                            name="describe_organization"
                            value="Small business (less than 20 employees)"
                            onChange={handleChange}
                          />
                          Small business (less than 20 employees)
                        </label>
                      </div>
                      <div>
                        <label>
                          <input
                            type="checkbox"
                            name="describe_organization"
                            value="Medium-size business (21-100 employees)"
                            onChange={handleChange}
                          />
                          Medium-size business (21-100 employees)
                        </label>
                      </div>
                      <div>
                        <label>
                          <input
                            type="checkbox"
                            name="describe_organization"
                            value="An individual"
                            onChange={handleChange}
                          />
                          An individual
                        </label>
                      </div>
                    </div>
                  </div>

                    </div>
                    <br />
                    <div className="form-group text-start fw-semibold">
                      <label>Products and Services Offered</label>
                      <input
                        type="products_and_services"
                        name="products_and_services"
                        id="products_and_services"
                        className="form-control input-lg"
                        placeholder="Kindly list them down if it’s more than one"
                        value={data.products_and_services}

                        onBlur={(e) => validateproducts_and_services(e.target.value)}
                        onChange={handleChange}
                      />
                      {valid.products_and_services && (
                        <span className="text-danger">{valid.products_and_servicesError}</span>
                      )}
                    </div>
                    <br />
                    <div className="form-group text-start fw-semibold">
                      <label>
                        Experience / Number of Years in the Business
                      </label>
                      <input
                        type="text"
                        name="business_experience"
                        id="business_experience"
                        className="form-control input-lg"
                        placeholder="Experience / Number of Years in the Business"
                        value={data.business_experience}

                        onBlur={(e) => validatebusiness_experience(e.target.value)}
                        onChange={handleChange}
                      />
                      {valid.business_experience && (
                        <span className="text-danger">
                          {valid.business_experienceError}
                        </span>
                      )}
                    </div>
                    <br />
                    <div className="form-group text-start fw-semibold">
                      <label>Where is your Organisation / Company based</label>
                      <input
                        type="text"
                        name="company_based"
                        id="company_based"
                        className="form-control input-lg"
                        placeholder=""
                        value={data.company_based}

                        onBlur={(e) => validatecompany_based(e.target.value)}
                        onChange={handleChange}
                      />
                      {valid.company_based && (
                        <span className="text-danger">
                          {valid.company_basedError}
                        </span>
                      )}
                    </div>
                    <br />

                    <div className="row">
                      <div className="col-xs-12 text-start fw-semibold">
                        <label>
                          What is the URL of your existing website (if any)?
                          What do you like and dislike about your existing
                          website?
                        </label>
                        <div className="form-group">
                          <input
                            type="text"
                            name="webisite_url"
                            id="webisite_url"
                            className="form-control input-lg"
                            placeholder=""
                            value={data.webisite_url}

                            onBlur={(e) => validatewebisite_url(e.target.value)}
                            onChange={handleChange}
                          />
                          {valid.webisite_url && (
                            <span className="text-danger">
                              {valid.webisite_urlError}
                            </span>
                          )}
                        </div>
                      </div>
                      <br />
                      <br />
                      <br />
                      <div className="col-xs-12 text-start fw-semibold">
                        <label>
                          What is the URL of 2-3 Competitors’ websites that you
                          like? What do you like about these websites?
                        </label>
                        <div className="form-group">
                          <input
                            type="text"
                            name="competitors_url"
                            id="competitors_url"
                            className="form-control input-lg"
                            placeholder=""
                            value={data.competitors_url}

                            onBlur={(e) => validatecompetitors_url(e.target.value)}
                            onChange={handleChange}
                          />
                          {valid.competitors_url && (
                            <span className="text-danger">
                              {valid.competitors_urlError}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <br />

                    <div className="row">
                      <div className="col-xs-12 text-start fw-semibold">
                        <label>
                          Who is the Website targeted at? Share a few points or
                          a brief note on the target audience
                        </label>
                        <div className="form-group">
                          <input
                            type="text"
                            name="target_audience"
                            id="target_audience"
                            className="form-control input-lg"
                            placeholder=""
                            value={data.target_audience}

                            onBlur={(e) => validatetarget_audience(e.target.value)}
                            onChange={handleChange}
                          />
                          {valid.target_audience && (
                            <span className="text-danger">
                              {valid.target_audienceError}
                            </span>
                          )}
                        </div>
                      </div>
                      <br />
                      <br />
                      <br />
                      <div className="col-xs-12 text-start fw-semibold">
                        <label>
                          Why should a customer buy your product or service from
                          you?
                        </label>
                        <div className="form-group">
                          <input
                            type="text"
                            name="why_consumer_buy"
                            id="why_consumer_buy"
                            className="form-control input-lg"
                            placeholder=""
                            value={data.why_consumer_buy}

                            onBlur={(e) => validatewhy_consumer_buy(e.target.value)}
                            onChange={handleChange}
                          />
                          {valid.why_consumer_buy && (
                            <span className="text-danger">
                              {valid.why_consumer_buyError}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                )}

                {currentStep === 2 && (
                    <div>
                                      
                      <div className="row g-4">
                      <div className="col-xs-12 text-start fw-semibold">
                        <label>
                        What should be the Call to Action for the Customers?
                        </label>
                        <div className="form-group">
                          <input
                            type="text"
                            name="call_to_action"
                            id="call_to_action"
                            className="form-control input-lg"
                            placeholder=""
                            value={data.call_to_action}

                            onBlur={(e) => validatecall_to_action(e.target.value)}
                            onChange={handleChange}
                          />
                          {valid.call_to_action && (
                            <span className="text-danger">
                              {valid.call_to_actionError}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-xs-12 text-start fw-semibold ">
                        <label>
                        Kindly specify the main pages that need to be there on the website
                        </label>
                        <div className="form-group">
                          <input
                            type="text"
                            name="main_pages"
                            id="main_pages"
                            className="form-control input-lg"
                            placeholder=""
                            value={data.main_pages}

                            onBlur={(e) => validatemain_pages(e.target.value)}
                            onChange={handleChange}
                          />
                          {valid.main_pages && (
                            <span className="text-danger">
                              {valid.main_pagesError}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="form-group text-start fw-semibold">
                      <label>If you have any content related to the menus, kindly share.</label>
                      <input
                        type="text"
                        name="menus_content"
                        id="menus_content"
                        className="form-control input-lg"
                        placeholder=""
                        value={data.menus_content}

                        onBlur={(e) => validatemenus_content(e.target.value)}
                        onChange={handleChange}
                      />
                      {valid.menus_content && (
                        <span className="text-danger">{valid.menus_contentError}</span>
                      )}
                    </div>
                    <br />
                    <div className="form-group text-start fw-semibold">
                      <label>
                      What should be the key takeaway for the Visitor / Customer once they visit your page?
                      </label>
                      <input
                        type="text"
                        name="key_takeaway"
                        id="key_takeaway"
                        className="form-control input-lg"
                        placeholder=""
                        value={data.key_takeaway}

                        onBlur={(e) => validatekey_takeaway(e.target.value)}
                        onChange={handleChange}
                      />
                      {valid.key_takeaway && (
                        <span className="text-danger">
                          {valid.key_takeawayError}
                        </span>
                      )}
                    </div>
                    <br />
                    <div className="form-group text-start fw-semibold">
                      <label>Do you know what platform you want to use for your site?</label>
                      <input
                        type="text"
                        name="platform_you_want"
                        id="platform_you_want"
                        className="form-control input-lg"
                        placeholder=""
                        value={data.platform_you_want}

                        onBlur={(e) => validateplatform_you_want(e.target.value)}
                        onChange={handleChange}
                      />
                      {valid.platform_you_want && (
                        <span className="text-danger">
                          {valid.platform_you_wantError}
                        </span>
                      )}
                    </div>
                    <br />

                    <div className="row">
                      <div className="col-xs-12 text-start fw-semibold">
                        <label>
                        What features do you need on your website?
                        </label>
                        <div className="form-group">
                          <input
                            type="text"
                            name="features"
                            id="features"
                            className="form-control input-lg"
                            placeholder=""
                            value={data.features}

                            onBlur={(e) => validatefeatures(e.target.value)}
                            onChange={handleChange}
                          />
                          {valid.features && (
                            <span className="text-danger">
                              {valid.featuresError}
                            </span>
                          )}
                        </div>
                      </div>
                      <br />
                      <br />
                      <br />
                      <div className="col-xs-12 text-start fw-semibold">
                        <label>
                        Does your company have a brand book covering things like colors and fonts?
                        </label>
                        <div className="form-group">
                          <input
                            type="text"
                            name="brand_book"
                            id="brand_book"
                            className="form-control input-lg"
                            placeholder=""
                            value={data.brand_book}

                            onBlur={(e) => validatebrand_book(e.target.value)}
                            onChange={handleChange}
                          />
                          {valid.brand_book && (
                            <span className="text-danger">
                              {valid.brand_bookError}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <br />

                      <div className="col-xs-12 text-start fw-semibold">
                        <label>
                        What is your budget for the website?
                        </label>
                        <div className="form-group">
                          <input
                            type="text"
                            name="budget"
                            id="budget"
                            className="form-control input-lg"
                          placeholder=""
                          value={data.budget}
                          
                            onBlur={(e) => validatebudget(e.target.value)}
                            onChange={handleChange}
                          />
                          {valid.budget && (
                            <span className="text-danger">
                              {valid.budgetError}
                            </span>
                          )}
                        </div>
                      </div>
                      <br />
                      
                      <div className="col-xs-12 text-start fw-semibold">
                        <label>
                        Do you need help updating and maintaining your website?
                        </label>
                        <div className="form-group">
                          <input
                            type="text"
                            name="updating_and_maintaining"
                            id="updating_and_maintaining"
                            className="form-control input-lg"
                          placeholder=""
                          value={data.updating_and_maintaining}
                          
                            onBlur={(e) => validateupdating_and_maintaining(e.target.value)}
                            onChange={handleChange}
                          />
                          {valid.updating_and_maintaining && (
                            <span className="text-danger">
                              {valid.updating_and_maintainingError}
                            </span>
                          )}
                        </div>
                      </div>
                      <br />

                      <div className="col-xs-12 text-start fw-semibold">
                        <label>
                        Do you need help with blogging and content marketing?
                        </label>
                        <div className="form-group">
                          <input
                            type="text"
                            name="content_marketing"
                            id="content_marketing"
                            className="form-control input-lg"
                          placeholder=""
                          value={data.content_marketing}
                          
                            onBlur={(e) => validatecontent_marketing(e.target.value)}
                            onChange={handleChange}
                          />
                          {valid.content_marketing && (
                            <span className="text-danger">
                              {valid.content_marketingError}
                            </span>
                          )}
                        </div>
                    </div>
                    <br />
                    
                      <div className="col-xs-12 text-start fw-semibold">
                        <label>
                        What is the intended Launch Date for the Website?</label>
                        <div className="form-group">
                          <input
                            type="text"
                            name="launch_date"
                            id="launch_date"
                            className="form-control input-lg"
                          placeholder=""
                          value={data.launch_date}
                          
                            onBlur={(e) => validatelaunch_date(e.target.value)}
                            onChange={handleChange}
                          />
                          {valid.launch_date && (
                            <span className="text-danger">
                              {valid.launch_dateError}
                            </span>
                          )}
                        </div>
                    </div>
                    <br />
                    
                      <div className="col-xs-12 text-start fw-semibold">
                        <label>
                        Who is the SPOC for Info or Queries website?</label>
                        <div className="form-group">
                          <input
                            type="text"
                            name="SPOC_for_Info"
                            id="SPOC_for_Info"
                            className="form-control input-lg"
                          placeholder=""
                          value={data.SPOC_for_Info}
                          
                            onBlur={(e) => validateSPOC_for_Info(e.target.value)}
                            onChange={handleChange}
                          />
                          {valid.SPOC_for_Info && (
                            <span className="text-danger">
                              {valid.SPOC_for_InfoError}
                            </span>
                          )}
                        </div>
                      </div>
                  </div>
                )}

                <br />
                <hr className="colorgraph" />
                <div className="row">
                  <div className="d-grid gap-2 col-md-6">
                    {currentStep > 1 && (
                      <button
                        className="btn btn-primary btn-lg"
                        type="button"
                        onClick={handlePrevious}
                      >
                        Previous
                      </button>
                    )}
                  </div>
                  <div className="d-grid gap-2 col-md-6">
                    {currentStep < 2 ? (
                      <button
                        className="btn btn-primary btn-lg"
                        type="button"
                        onClick={handleNext}
                      >
                        Next
                      </button>
                    ) : (
                      <button
                        className="btn btn-warning btn-lg"
                        name="Submit"
                        value="Login"
                        type="Submit"
                        onClick={signuphandler}
                      >
                        {loading ? (
                          <div
                            className="spinner-border spinner-border-sm"
                            role="status"
                          ></div>
                        ) : (
                          "Register"
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
