import "../Pages/home.css";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { videodata, videoDataById, updatewebform } from '../../Services/Auth.service'
import { useNavigate, Link, useParams } from "react-router-dom";
export default function Video() {
  const navigate = useNavigate();
  let { _id } = useParams();
  console.log("prem",_id);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    communication : "",
    primary: "",
    secondary: "",
    age_group:"",
    academic_background: "",
    occupation: "",
    location: "",
    single_minded_proposition: "",
    support_the_SMP: "",
    key_takeaways: "",
    script_flow: "",
    artist: "",
    gender: "",
    accent: "",
    tone: "",
    signature:"",
    action: "",
    scope_of_shoot: "",
    testimonial: "",
    video_duration: "",
  });
  console.log("videodata=====>", data);

  const signuphandler = async () => {
    const apiResponse = await videodata(
      data.communication,
      data.primary,
      data.secondary,
      data.age_group,
      data.academic_background,
      data.occupation,
      data.location,
      data.single_minded_proposition,
      data.support_the_SMP,
      data.key_takeaways,
      data.script_flow,
      data.main_pages,
      data.menus_content,
      data.artist,
      data.gender,
      data.accent,
      data.tone,
      data.signature,
      data.action,
      data.scope_of_shoot, 
      data.testimonial,
      data.video_duration,
    );
    //  console.log("apiResponse", apiResponse);
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
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  // Validations
  const [valid, setValid] = useState({
    communication : true,
    primary: true,
    secondary: true,
    age_group:true,
    academic_background: true,
    occupation: true,
    location: true,
    single_minded_proposition: true,
    support_the_SMP: true,
    key_takeaways: true,
    script_flow: true,
    artist: true,
    gender: true,
    accent: true,
    tone: true,
    signature:true,
    action: true,
    scope_of_shoot: true,
    testimonial: true,
    video_duration: true,

    communicationError : "",
    primaryError: "",
    secondaryError: "",
    age_groupError:"",
    academic_backgroundError: "",
    occupationError: "",
    locationError: "",
    single_minded_propositionError: "",
    support_the_SMPError: "",
    key_takeawaysError: "",
    script_flowError: "",
    artistError: "",
    genderError: "",
    accentError: "",
    toneError: "",
    signatureError:"",
    actionError: "",
    scope_of_shootError: "",
    testimonialError: "",
    video_durationError: "",
  });

  const validatecommunication = (communication) => {
    if (communication.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        communication: true,
        communicationError: "Please enter communication",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        communication: false,
        communicationError: "",
      }));
    }
  };

  const validateprimary = (primary) => {
    if (primary.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        primary: true,
        primaryError: "Please enter primary",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        primary: false,
        primaryError: "",
      }));
    }
  };

  const validateage_group = (age_group) => {
    if (age_group.length === 0) {
      setValid((previousValue) => ({
        ...previousValue,
        age_group: true,
        age_groupError: "Enter your correct age_group",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        age_group: false,
        age_groupError: "",
      }));
    }
  };

  const validatesecondary = (secondary) => {
    if (secondary.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        secondary: true,
        secondaryError: "Please enter secondary",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        secondary: false,
        secondaryError: "",
      }));
    }
  };

  const validateacademic_background = (academic_background) => {
    if (academic_background.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        academic_background: true,
        academic_backgroundError: "Please enter academic_background",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        academic_background: false,
        academic_backgroundError: "",
      }));
    }
  };

  const validateoccupation = (occupation) => {
    if (occupation.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        occupation: true,
        occupationError: "Please enter occupation",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        occupation: false,
        occupationError: "",
      }));
    }
  };

  const validatelocation = (location) => {
    if (location.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        location: true,
        locationError: "Please enter location",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        location: false,
        locationError: "",
      }));
    }
  };

  const validatesupport_the_SMP = (support_the_SMP) => {
    if (support_the_SMP.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        support_the_SMP: true,
        support_the_SMPError: "Please enter support_the_SMP",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        support_the_SMP: false,
        support_the_SMPError: "",
      }));
    }
  };
  const validatekey_takeaways = (key_takeaways) => {
    if (key_takeaways.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        key_takeaways: true,
        key_takeawaysError: "Please enter key_takeaways",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        key_takeaways: false,
        key_takeawaysError: "",
      }));
    }
  };const validatescript_flow = (script_flow) => {
    if (script_flow.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        script_flow: true,
        script_flowError: "Please enter script_flow",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        script_flow: false,
        script_flowError: "",
      }));
    }
  };const validateartist = (artist) => {
    if (artist.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        artist: true,
        artistError: "Please enter artist",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        artist: false,
        artistError: "",
      }));
    }
  };const validatevideo_duration = (video_duration) => {
    if (video_duration.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        video_duration: true,
        video_durationError: "Please enter video_duration",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        video_duration: false,
        video_durationError: "",
      }));
    }
  };const validatetestimonial = (testimonial) => {
    if (testimonial.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        testimonial: true,
        testimonialError: "Please enter testimonial",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        testimonial: false,
        testimonialError: "",
      }));
    }
  };const validatescope_of_shoot = (scope_of_shoot) => {
    if (scope_of_shoot.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        scope_of_shoot: true,
        scope_of_shootError: "Please enter scope_of_shoot",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        scope_of_shoot: false,
        scope_of_shootError: "",
      }));
    }
  };const validateaction = (action) => {
    if (action.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        action: true,
        actionError: "Please enter action",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        action: false,
        actionError: "",
      }));
    }
  };const validatesignature = (signature) => {
    if (signature.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        signature: true,
        signatureError: "Please enter signature",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        signature: false,
        signatureError: "",
      }));
    }
  };
 
  const validatesingle_minded_proposition = (single_minded_proposition) => {
    if (single_minded_proposition.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        single_minded_proposition: true,
        single_minded_propositionError: "Please enter single_minded_proposition",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        single_minded_proposition: false,
        single_minded_propositionError: "",
      }));
    }
  };
  useEffect(() => {
    const showList = async () => {
      const result = await videoDataById(_id);
      const payload=result.data.result
      setData({
    communication : payload.communication,
    primary: payload.primary,
    secondary: payload.secondary,
    age_group:payload.age_group,
    academic_background: payload.academic_background,
    occupation: payload.occupation,
    location: payload.location,
    single_minded_proposition: payload.single_minded_proposition,
    support_the_SMP: payload.support_the_SMP,
    key_takeaways: payload.key_takeaways,
    script_flow: payload.script_flow,
    artist: payload.artist,
    gender: payload.gender,
    accent: payload.accent,
    tone: payload.tone,
    signature:payload.signature,
    action: payload.action,
    scope_of_shoot: payload.scope_of_shoot,
    testimonial: payload.testimonial,
    video_duration: payload.video_duration,
      })

      console.log("arrrrrayyy===>>",result.data.result);
    };
    showList();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("sssssssssssssssaaaaaaaaaa", _id);
      const response = await updatewebform(data, _id);
      console.log("update====>",response);
      if (response.data.status === 200) {
        navigate("/admin/dashboard")
      }
    } catch (e) {
      console.warn(e);
    }
  };
  
  return (
    <div>
      <div className="form-gap"></div>
      <div className="container ">
        <div className="text-center">
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-12 col-sm-offset-2 col-md-offset-3 g-4 py-4">
              <form role="form" onSubmit={(e) => handleSubmit(e)}>
                <h3 className="headtext text-center">Video Form</h3>
                <hr className="colorgraph" />
                <div className="row g-4">
               

                <div className="form-group text-start  col-xs-12 col-sm-e ">
                    <div
                      className={`form-group ${data.communication && "focused"}`}
                    >
                      <label
                        htmlFor="communication"
                        className={`label d-flex fw-semibold text-start ${data.communication && "focused-label"}`}
                      >
                        What is the Objective of the Communication?
                      </label>
                      <input
                        type="text"
                        name="communication"
                        id="communication"
                        className="form-control input-lg"
                        placeholder="What is the Objective of the Communication?"
                        onFocus={() =>
                          setData((prevData) => ({
                            ...prevData,
                            communication: true,
                          }))
                        }
                        onBlur={(e) => {
                          validatecommunication(e.target.value);
                          setData((prevData) => ({
                            ...prevData,
                            communication: false,
                          }));
                        }}
                        onChange={handleChange}
                      />
                      {valid.communication && (
                        <span className="text-danger">
                          {valid.communicationError}
                        </span>
                      )}
                      {data.communication && (
                        <FontAwesomeIcon icon={faUser} className="input-icon" />
                      )}
                    </div>
                  </div>
                  
                  <div className="col-xs-12 text-start fw-semibold ">
                    <label>Who is the Target Group?</label><br/>
                  </div>

                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-e col-md-4 py-4">
                    <div
                      className={`form-group ${data.primary && "focused"}`}
                    >
                      <label
                        htmlFor="first_name"
                        className={`label d-flex fw-semibold text-start ${data.primary && "focused-label"}`}
                      >
                        Primary
                      </label>
                      <input
                        type="text"
                        name="primary"
                        id="primary"
                        className="form-control input-lg"
                        placeholder="Primary"
                        onFocus={() =>
                          setData((prevData) => ({
                            ...prevData,
                            primary: true,
                          }))
                        }
                        onBlur={(e) => {
                          validateprimary(e.target.value);
                          setData((prevData) => ({
                            ...prevData,
                            primary: false,
                          }));
                        }}
                        onChange={handleChange}
                      />
                      {valid.primary && (
                        <span className="text-danger">
                          {valid.primaryError}
                        </span>
                      )}
                      {data.primary && (
                        <FontAwesomeIcon icon={faUser} className="input-icon" />
                      )}
                    </div>
                  </div>

                  <div className="col-xs-12 col-sm-e col-md-4 py-4">
                    <div
                      className={`form-group ${data.secondary && "focused"}`}
                    >
                      <label
                        htmlFor="first_name"
                        className={`label d-flex fw-semibold text-start ${data.secondary && "focused-label"}`}
                      >
                        Secondary
                      </label>
                      <input
                        type="text"
                        name="secondary"
                        id="secondary"
                        className="form-control input-lg"
                        placeholder="secondary"
                        onFocus={() =>
                          setData((prevData) => ({
                            ...prevData,
                            secondary: true,
                          }))
                        }
                        onBlur={(e) => {
                          validatesecondary(e.target.value);
                          setData((prevData) => ({
                            ...prevData,
                            secondary: false,
                          }));
                        }}
                        onChange={handleChange}
                      />
                      {valid.secondary && (
                        <span className="text-danger">
                          {valid.secondaryError}
                        </span>
                      )}
                      {data.secondary && (
                        <FontAwesomeIcon icon={faUser} className="input-icon" />
                      )}
                    </div>
                  </div>


                  <div className="col-xs-12 col-sm-e col-md-4 py-4">
                    <div
                      className={`form-group ${data.age_group && "focused"}`}
                    >
                      <label
                        htmlFor="first_name"
                        className={`label d-flex fw-semibold text-start ${data.age_group && "focused-label"}`}
                      >
                        Age Group
                      </label>
                      <input
                        type="text"
                        name="age_group"
                        id="age_group"
                        className="form-control input-lg"
                        placeholder="age group"
                        onFocus={() =>
                          setData((prevData) => ({
                            ...prevData,
                            age_group: true,
                          }))
                        }
                        onBlur={(e) => {
                          validateage_group(e.target.value);
                          setData((prevData) => ({
                            ...prevData,
                            age_group: false,
                          }));
                        }}
                        onChange={handleChange}
                      />
                      {valid.age_group && (
                        <span className="text-danger">
                          {valid.age_groupError}
                        </span>
                      )}
                      {data.age_group && (
                        <FontAwesomeIcon icon={faUser} className="input-icon" />
                      )}
                    </div>
                  </div>
                </div>

                  <div className="form-group text-start  col-xs-12 col-sm-e ">
                    <div
                      className={`form-group ${data.academic_background && "focused"}`}
                    >
                      <label
                        htmlFor="academic_background"
                        className={`label d-flex fw-semibold text-start ${data.academic_background && "focused-label"}`}
                      >
                        What is the Objective of the academic_background?
                      </label>
                      <input
                        type="text"
                        name="academic_background"
                        id="academic_background"
                        className="form-control input-lg"
                        placeholder="What is the Objective of the academic_background?"
                        onFocus={() =>
                          setData((prevData) => ({
                            ...prevData,
                            academic_background: true,
                          }))
                        }
                        onBlur={(e) => {
                          validateacademic_background(e.target.value);
                          setData((prevData) => ({
                            ...prevData,
                            academic_background: false,
                          }));
                        }}
                        onChange={handleChange}
                      />
                      {valid.academic_background && (
                        <span className="text-danger">
                          {valid.academic_backgroundError}
                        </span>
                      )}
                      {data.academic_background && (
                        <FontAwesomeIcon icon={faUser} className="input-icon" />
                      )}
                    </div>
                </div>
                
                  <div className="form-group text-start  col-xs-12 col-sm-e py-4">
                    <div
                      className={`form-group ${data.occupation && "focused"}`}
                    >
                      <label
                        htmlFor="occupation"
                        className={`label d-flex fw-semibold text-start ${data.occupation && "focused-label"}`}
                      >
                        What is the Objective of the occupation?
                      </label>
                      <input
                        type="text"
                        name="occupation"
                        id="occupation"
                        className="form-control input-lg"
                        placeholder="What is the Objective of the occupation?"
                        onFocus={() =>
                          setData((prevData) => ({
                            ...prevData,
                            occupation: true,
                          }))
                        }
                        onBlur={(e) => {
                          validateoccupation(e.target.value);
                          setData((prevData) => ({
                            ...prevData,
                            occupation: false,
                          }));
                        }}
                        onChange={handleChange}
                      />
                      {valid.occupation && (
                        <span className="text-danger">
                          {valid.occupationError}
                        </span>
                      )}
                      {data.occupation && (
                        <FontAwesomeIcon icon={faUser} className="input-icon" />
                      )}
                    </div>
                  </div>
                
               
                <div className="form-group text-start  col-xs-12 col-sm-e py-4 ">
                    <div
                      className={`form-group ${data.location && "focused"}`}
                    >
                      <label
                        htmlFor="location"
                        className={`label d-flex fw-semibold text-start ${data.location && "focused-label"}`}
                      >
                        What is the Objective of the location?
                      </label>
                      <input
                        type="text"
                        name="location"
                        id="location"
                        className="form-control input-lg"
                        placeholder="What is the Objective of the location?"
                        onFocus={() =>
                          setData((prevData) => ({
                            ...prevData,
                            location: true,
                          }))
                        }
                        onBlur={(e) => {
                          validatelocation(e.target.value);
                          setData((prevData) => ({
                            ...prevData,
                            location: false,
                          }));
                        }}
                        onChange={handleChange}
                      />
                      {valid.location && (
                        <span className="text-danger">
                          {valid.locationError}
                        </span>
                      )}
                      {data.location && (
                        <FontAwesomeIcon icon={faUser} className="input-icon" />
                      )}
                    </div>
                  </div>

                    <div className="form-group text-start  col-xs-12 col-sm-e py-4">
                    <div
                      className={`form-group ${data.single_minded_proposition && "focused"}`}
                    >
                      <label
                        htmlFor="single_minded_proposition"
                        className={`label d-flex fw-semibold text-start ${data.single_minded_proposition && "focused-label"}`}
                      >
                        What is the Single-Minded Proposition (SMP)/ Core Message of this Communication?
                      </label>
                      <input
                        type="text"
                        name="single_minded_proposition"
                        id="single_minded_proposition"
                        className="form-control input-lg"
                        placeholder=""
                        onFocus={() =>
                          setData((prevData) => ({
                            ...prevData,
                            single_minded_proposition: true,
                          }))
                        }
                        onBlur={(e) => {
                          validatesingle_minded_proposition(e.target.value);
                          setData((prevData) => ({
                            ...prevData,
                            single_minded_proposition: false,
                          }));
                        }}
                        onChange={handleChange}
                      />
                      {valid.single_minded_proposition && (
                        <span className="text-danger">
                          {valid.single_minded_propositionError}
                        </span>
                      )}
                      {data.single_minded_proposition && (
                        <FontAwesomeIcon icon={faUser} className="input-icon" />
                      )}
                    </div>
                  </div>

                  <div className="form-group text-start  col-xs-12 col-sm-e py-4">
                    <div
                      className={`form-group ${data.support_the_SMP && "focused"}`}
                    >
                      <label
                        htmlFor="support_the_SMP"
                        className={`label d-flex fw-semibold text-start ${data.support_the_SMP && "focused-label"}`}
                      >
                        What are the claims that support the SMP/Core Message?
                      </label>
                      <input
                        type="text"
                        name="support_the_SMP"
                        id="support_the_SMP"
                        className="form-control input-lg"
                        placeholder=""
                        onFocus={() =>
                          setData((prevData) => ({
                            ...prevData,
                            support_the_SMP: true,
                          }))
                        }
                        onBlur={(e) => {
                          validatesupport_the_SMP(e.target.value);
                          setData((prevData) => ({
                            ...prevData,
                            support_the_SMP: false,
                          }));
                        }}
                        onChange={handleChange}
                      />
                      {valid.support_the_SMP && (
                        <span className="text-danger">
                          {valid.support_the_SMPError}
                        </span>
                      )}
                      {data.support_the_SMP && (
                        <FontAwesomeIcon icon={faUser} className="input-icon" />
                      )}
                    </div>
                  </div>

                  <div className="form-group text-start  col-xs-12 col-sm-e py-4">
                    <div
                      className={`form-group ${data.key_takeaways && "focused"}`}
                    >
                      <label
                        htmlFor="key_takeaways"
                        className={`label d-flex fw-semibold text-start ${data.key_takeaways && "focused-label"}`}
                      >
                        List down the Key Takeaways for the Viewer
                      </label>
                      <input
                        type="text"
                        name="key_takeaways"
                        id="key_takeaways"
                        className="form-control input-lg"
                        placeholder=""
                        onFocus={() =>
                          setData((prevData) => ({
                            ...prevData,
                            key_takeaways: true,
                          }))
                        }
                        onBlur={(e) => {
                          validatekey_takeaways(e.target.value);
                          setData((prevData) => ({
                            ...prevData,
                            key_takeaways: false,
                          }));
                        }}
                        onChange={handleChange}
                      />
                      {valid.key_takeaways && (
                        <span className="text-danger">
                          {valid.key_takeawaysError}
                        </span>
                      )}
                      {data.key_takeaways && (
                        <FontAwesomeIcon icon={faUser} className="input-icon" />
                      )}
                    </div>
                  </div>
                 
                  
                  <div className="form-group text-start  col-xs-12 col-sm-e py-4">
                    <div
                      className={`form-group ${data.script_flow && "focused"}`}
                    >
                      <label
                        htmlFor="script_flow"
                        className={`label d-flex fw-semibold text-start ${data.script_flow && "focused-label"}`}
                      >
                        Will you be able to provide us the script/flow for the video or our content person
                      needs to write it?
                      </label>
                      <input
                        type="text"
                        name="script_flow"
                        id="script_flow"
                        className="form-control input-lg"
                        placeholder=""
                        onFocus={() =>
                          setData((prevData) => ({
                            ...prevData,
                            script_flow: true,
                          }))
                        }
                        onBlur={(e) => {
                          validatescript_flow(e.target.value);
                          setData((prevData) => ({
                            ...prevData,
                            script_flow: false,
                          }));
                        }}
                        onChange={handleChange}
                      />
                      {valid.script_flow && (
                        <span className="text-danger">
                          {valid.script_flowError}
                        </span>
                      )}
                      {data.script_flow && (
                        <FontAwesomeIcon icon={faUser} className="input-icon" />
                      )}
                    </div>
                  </div>
                  <div className="form-group text-start  col-xs-12 col-sm-e py-4">
                    <div
                      className={`form-group ${data.artist && "focused"}`}
                    >
                      <label
                        htmlFor="artist"
                        className={`label d-flex fw-semibold text-start ${data.artist && "focused-label"}`}
                      >
                        Do suggest your preferences about Voice Over Artist / Narrator:
                      </label>
                      <input
                        type="text"
                        name="artist"
                        id="artist"
                        className="form-control input-lg"
                        placeholder=""
                        onFocus={() =>
                          setData((prevData) => ({
                            ...prevData,
                            artist: true,
                          }))
                        }
                        onBlur={(e) => {
                          validateartist(e.target.value);
                          setData((prevData) => ({
                            ...prevData,
                            artist: false,
                          }));
                        }}
                        onChange={handleChange}
                      />
                      {valid.artist && (
                        <span className="text-danger">
                          {valid.artistError}
                        </span>
                      )}
                      {data.artist && (
                        <FontAwesomeIcon icon={faUser} className="input-icon" />
                      )}
                    </div>
                  </div>
                 
                  <div className="col-xs-12 text-start fw-semibold py-4">
                  <label
                      htmlFor="gender"
                      className={`label ${data.gender && 'focused-label'}`}
                    >
                     Gender
                    </label>
                  <div className={`form-group  ${data.gender && 'focused'}`}>
                    
                    <select
                      name="gender"
                      id="gender"
                      className="form-control input-lg"
                      onFocus={() => setData((prevData) => ({ ...prevData, gender: true }))}
                      onBlur={() => setData((prevData) => ({ ...prevData, gender: false }))}
                      onChange={handleChange}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    {data.gender && <FontAwesomeIcon icon={faUser} className="input-icon" />}
                  </div>
                  </div>

                  <div className="col-xs-12 text-start fw-semibold py-4">
                  <label
                    htmlFor="accent"
                    className={`label ${data.accent && 'focused-label'}`}
                  >
                   Accent
                  </label>
                  <div className={`form-group  ${data.accent && 'focused'}`}>
                  
                  <select
                    name="accent"
                    id="accent"
                    className="form-control input-lg"
                    onFocus={() => setData((prevData) => ({ ...prevData, accent: true }))}
                    onBlur={() => setData((prevData) => ({ ...prevData, accent: false }))}
                    onChange={handleChange}
                  >
                    <option value="">Select Accent</option>
                    <option value="Neutral">Neutral</option>
                    <option value="US">US</option>
                    <option value="Other">Other</option>
                  </select>
                  {data.accent && <FontAwesomeIcon icon={faUser} className="input-icon" />}
                </div>
                  </div>
                  
                  <div className="col-xs-12 col-sm-8 col-md-12 text-start fw-semibold py-4">
                  <label
                      htmlFor="tone"
                      className={`label ${data.tone && 'focused-label'}`}
                    >
                     Tone
                    </label>
                  <div className={`form-group  ${data.tone && 'focused'}`}>
                    
                    <select
                      name="tone"
                      id="tone"
                      className="form-control input-lg"
                      onFocus={() => setData((prevData) => ({ ...prevData, tone: true }))}
                      onBlur={() => setData((prevData) => ({ ...prevData, tone: false }))}
                      onChange={handleChange}
                    >
                      <option value="">Select Tone</option>
                      <option value="Formal or Professional">Formal or Professional</option>
                      <option value="Casual yet Informative">Casual yet Informative</option>
                      <option value="Other">Other</option>
                    </select>
                    {data.tone && <FontAwesomeIcon icon={faUser} className="input-icon" />}
                  </div>
                </div>
                
                <div className="form-group text-start  col-xs-12 col-sm-e py-4">
                    <div
                      className={`form-group ${data.signature && "focused"}`}
                    >
                      <label
                        htmlFor="signature"
                        className={`label d-flex fw-semibold text-start ${data.signature && "focused-label"}`}
                      >
                        Is there any Signature Tune for the Brand to use for the Background Score? If Yes: Kindly share,
                        If No: We can suggest accordingly
                      </label>
                      <input
                        type="text"
                        name="signature"
                        id="signature"
                        className="form-control input-lg"
                        placeholder=""
                        onFocus={() =>
                          setData((prevData) => ({
                            ...prevData,
                            signature: true,
                          }))
                        }
                        onBlur={(e) => {
                          validatesignature(e.target.value);
                          setData((prevData) => ({
                            ...prevData,
                            signature: false,
                          }));
                        }}
                        onChange={handleChange}
                      />
                      {valid.signature && (
                        <span className="text-danger">
                          {valid.signatureError}
                        </span>
                      )}
                      {data.signature && (
                        <FontAwesomeIcon icon={faUser} className="input-icon" />
                      )}
                    </div>
                  </div>
                  
                  <div className="form-group text-start  col-xs-12 col-sm-e py-4">
                    <div
                      className={`form-group ${data.action && "focused"}`}
                    >
                      <label
                        htmlFor="action"
                        className={`label d-flex fw-semibold text-start ${data.action && "focused-label"}`}
                      >
                        Should any Call to Action be mentioned? If Yes, kindly share
                      </label>
                      <input
                        type="text"
                        name="action"
                        id="action"
                        className="form-control input-lg"
                        placeholder=""
                        onFocus={() =>
                          setData((prevData) => ({
                            ...prevData,
                            action: true,
                          }))
                        }
                        onBlur={(e) => {
                          validateaction(e.target.value);
                          setData((prevData) => ({
                            ...prevData,
                            action: false,
                          }));
                        }}
                        onChange={handleChange}
                      />
                      {valid.action && (
                        <span className="text-danger">
                          {valid.actionError}
                        </span>
                      )}
                      {data.action && (
                        <FontAwesomeIcon icon={faUser} className="input-icon" />
                      )}
                    </div>
                </div>
                
                <div className="form-group text-start  col-xs-12 col-sm-e py-4">
                    <div
                      className={`form-group ${data.scope_of_shoot && "focused"}`}
                    >
                      <label
                        htmlFor="scope_of_shoot"
                        className={`label d-flex fw-semibold text-start ${data.scope_of_shoot && "focused-label"}`}
                      >
                        Is there a scope of shoot, please mention the location?
                      </label>
                      <input
                        type="text"
                        name="scope_of_shoot"
                        id="scope_of_shoot"
                        className="form-control input-lg"
                        placeholder=""
                        onFocus={() =>
                          setData((prevData) => ({
                            ...prevData,
                            scope_of_shoot: true,
                          }))
                        }
                        onBlur={(e) => {
                          validatescope_of_shoot(e.target.value);
                          setData((prevData) => ({
                            ...prevData,
                            scope_of_shoot: false,
                          }));
                        }}
                        onChange={handleChange}
                      />
                      {valid.scope_of_shoot && (
                        <span className="text-danger">
                          {valid.scope_of_shootError}
                        </span>
                      )}
                      {data.scope_of_shoot && (
                        <FontAwesomeIcon icon={faUser} className="input-icon" />
                      )}
                    </div>
                  </div>
                  
                
                <div className="form-group text-start  col-xs-12 col-sm-e py-4">
                    <div
                      className={`form-group ${data.testimonial && "focused"}`}
                    >
                      <label
                        htmlFor="testimonial"
                        className={`label d-flex fw-semibold text-start ${data.testimonial && "focused-label"}`}
                      >
                        Is there a scope of testimonial, if yes how many people will be talking in the film?
                      </label>
                      <input
                        type="text"
                        name="testimonial"
                        id="testimonial"
                        className="form-control input-lg"
                        placeholder=""
                        onFocus={() =>
                          setData((prevData) => ({
                            ...prevData,
                            testimonial: true,
                          }))
                        }
                        onBlur={(e) => {
                          validatetestimonial(e.target.value);
                          setData((prevData) => ({
                            ...prevData,
                            testimonial: false,
                          }));
                        }}
                        onChange={handleChange}
                      />
                      {valid.testimonial && (
                        <span className="text-danger">
                          {valid.testimonialError}
                        </span>
                      )}
                      {data.testimonial && (
                        <FontAwesomeIcon icon={faUser} className="input-icon" />
                      )}
                    </div>
                  </div>
                  
                  <div className="form-group text-start  col-xs-12 col-sm-e py-4">
                    <div
                      className={`form-group ${data.video_duration && "focused"}`}
                    >
                      <label
                        htmlFor="video_duration"
                        className={`label d-flex fw-semibold text-start fw-semibold ${data.video_duration && "focused-label"}`}
                      >
                        Required video duration and any referral video link similar to your requirement?
                      </label>
                      <input
                        type="text"
                        name="video_duration"
                        id="video_duration"
                        className="form-control input-lg"
                        placeholder=""
                        onFocus={() =>
                          setData((prevData) => ({
                            ...prevData,
                            video_duration: true,
                          }))
                        }
                        onBlur={(e) => {
                          validatevideo_duration(e.target.value);
                          setData((prevData) => ({
                            ...prevData,
                            video_duration: false,
                          }));
                        }}
                        onChange={handleChange}
                      />
                      {valid.video_duration && (
                        <span className="text-danger">
                          {valid.video_durationError}
                        </span>
                      )}
                      {data.video_duration && (
                        <FontAwesomeIcon icon={faUser} className="input-icon" />
                      )}
                    </div>
                  </div>
                

                <hr className="colorgraph" />

                <div className="row">
                  <div className="text-right">
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
