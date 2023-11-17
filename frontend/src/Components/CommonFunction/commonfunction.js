import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userlogout } from "../../Slice/authSlice";

export const  Logout =()=> {
  
  const dispatch = useDispatch();
  let navigate = useNavigate();
  dispatch(userlogout());
  localStorage.clear();
  window.location.replace('/')


}
