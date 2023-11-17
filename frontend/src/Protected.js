import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedOutlet() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const location=useLocation()
  console.log("isLoggedIn",isLoggedIn)
  if (isLoggedIn) {
    return <Outlet />;
  } else {
    return <Navigate to="/" replace state={{from:location}} />;
  }
}
