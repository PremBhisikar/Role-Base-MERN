import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import '../WebDashboard/webdashboard.css';
import { webdataList, deletewebform } from "../../Services/Auth.service";
import { Container, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userlogout } from "../../Slice/authSlice";
export default function WebDasboard() {
    const userdata = useSelector((state) => state.auth);
    const [show, setShow] = useState([]);
  
    useEffect(() => {
      const showList = async () => {
        const result = await webdataList();
        const arr = result.data.result;
        setShow(arr);
      };
      showList();
    }, []);
    console.log("shooowlist==>>", show);
  
    const handleSubmit = async (_id) => {
      console.log(handleSubmit);
      alert("customer deleted");
      const updateResponse = await deletewebform(_id);
  
      console.log("ijni", updateResponse);
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
        <Container>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
            integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
          />
  
          <div className="my-4"></div>
          <button
          className="btn btn-md btn-danger"
          onClick={()=> handellogout() }
           >
          <i class="fa-solid fa-power-off"></i>
          </button>
          <div>
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
                {show.slice().map((data, index) => {
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
                        <Link to={`/#/${data._id}`}>
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
        </Container>
      </>
    );
}