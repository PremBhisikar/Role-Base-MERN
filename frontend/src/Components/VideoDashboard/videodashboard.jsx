import '../VideoDashboard/videodashboard.css';
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../AdminDashboard/adminDash.css";
import { videodataList, deletevideoform } from "../../Services/Auth.service";
import { Container, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userlogout } from "../../Slice/authSlice";
export default function VideoDashboard() {
  const userdata = useSelector((state) => state.auth);
  const [show, setShow] = useState([]);

  useEffect(() => {
    const showList = async () => {
      const result = await videodataList();
      const arr = result.data.result;
      setShow(arr);
    };
    showList();
  }, []);
  console.log("shooowlist==>>", show);

  const handleSubmit = async (_id) => {
    console.log(handleSubmit);
    alert("customer deleted");
    const updateResponse = await deletevideoform(_id);

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
        <h2>Video Form Data</h2>
          <br />
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
              {show.slice().map((data, index) => {
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
                      <Link to={`/Video${data._id}`}>
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