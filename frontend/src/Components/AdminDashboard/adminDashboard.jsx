import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../AdminDashboard/adminDash.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userlogout } from "../../Slice/authSlice";
import {
  videodataList,
  webdataList,
  deletewebform,
  deletevideoform
} from "../../Services/Auth.service";
import { Container, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";
import  {Logout } from "../CommonFunction/commonfunction";
export default function AdminDashboard() {
  const userdata = useSelector((state) => state.auth);
  const [webData, setWebData] = useState([]);
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    const showWebDataList = async () => {
      const webDataResult = await webdataList();
      const webDataArr = webDataResult.data.result;
      setWebData(webDataArr);
    };
    showWebDataList();
  }, []);

  const getVideoDataList = async () => {
    const videoData = await videodataList();
    console.log("videoData", videoData.data.result);
    setVideoData(videoData.data.result);
  };

  useEffect(() => {
    getVideoDataList();
  }, []);

  const handleSubmit = async (_id) => {
    alert("customer deleted");
    const updateResponse = await deletewebform(_id);
    window.location.reload();
  };
  const handleSubmitVideo = async (_id) => {
    alert("customer deleted");
    const updateResponse = await deletevideoform(_id);
    window.location.reload();
  };
  const dispatch = useDispatch();
  let navigate = useNavigate();
  

  const handellogout = () => {
    dispatch(userlogout());
    localStorage.clear();
    window.location.replace('/')
  };
  return (
    <>
      <div className="d-flex flex-wrap">
      <div className="left-sidebar">
        <Sidebar />
      </div>
      <div className="my-4"></div>
       
      <div className="p-container">
      <button
          className="btn btn-md btn-danger"
          onClick={()=> handellogout() }
           >
          <i class="fa-solid fa-power-off"></i>
          </button>

          <Link to="/webform">
          <Button variant="dark" >Add Member</Button>
        </Link>
      <div className="container">
        <h2>Web Form Data</h2>
        <br />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Services</th>
              <th>Company Based</th>
              <th>Website URL</th>
              <th>Compatetors URL</th>
              <th>Target Audience</th>
              <th>Why to Buy</th>
              <th>budget</th>
              <th>View</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {webData.slice().map((data, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.company_stand_for}</td>
                  <td>{data.company_based}</td>
                  <td>{data.webisite_url}</td>
                  <td>{data.competitors_url}</td>
                  <td>{data.target_audience}</td>
                  <td>{data.why_consumer_buy}</td>
                  <td>{data.call_to_action}</td>

                  <td>
                    <Link to={`/web/formedit/${data._id}`}>
                      {console.log ("editcustomer====>",data._id)}
                      <i class="fa fa-eye"></i>
                    </Link>
                  </td>

                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleSubmit(data._id)}
                      className="bi bi-trash"
                    >
                      <i class="fa fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>

      {/* <div className="my-4"></div> */}
      <div className="container">
        
        <h2>Video Form Data</h2>
        <br />
        <Link to="/video">
          <Button variant="dark" >Add Member</Button>
        </Link>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Communication</th>
              <th>Primary</th>
              <th>Secondary</th>
              <th>Acadamic Background</th>
              <th>Occupation</th>
              <th>Location</th>
              <th>Support SMP</th>
              <th>View</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {videoData.slice().map((data, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.communication}</td>
                  <td>{data.primary}</td>
                  <td>{data.secondary}</td>
                  <td>{data.academic_background}</td>
                  <td>{data.occupation}</td>
                  <td>{data.location}</td>
                  <td>{data.support_the_SMP}</td>

                  <td>
                    <Link to={`/editvideo/${data._id}`}>
                      <i class="fa fa-eye"></i>
                    </Link>
                  </td>

                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleSubmitVideo(data._id)}
                      className="bi bi-trash"
                    >
                      <i class="fa fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        </div>
        </div>
        </div>
    </>
  );
}
