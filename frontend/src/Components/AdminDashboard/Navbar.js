import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userlogout } from "../Slice/authSlice";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const userdata = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handellogout = () => {
    dispatch(userlogout());
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <header id="header ">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />

        <nav className="navbar navbar-expand-lg navbar-dark ">
          <div className="container">
            <Link className="navbar-brand" to="/">
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="text-right">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto ">
                  {userdata.isLoggedIn ? (
                    <div>
                      <Link className="navbar-brand" to="/home">
                        <i class="fa-solid fa-house-user"></i>
                      </Link>

                      <Link className="navbar-brand" to="/contact">
                        <i class="fa-solid fa-envelopes"></i>
                      </Link>
                      <button
                        className="btn btn-md btn-danger"
                        onClick={handellogout}
                      >
                        <i class="fa-solid fa-power-off"></i>
                      </button>
                    </div>
                  ) : (
                    <div>
                      <Link className="navbar-brand" zc to="/home">
                        <i class="fa fa-solid fa-house-user"></i>
                      </Link>
                      <Link className="navbar-brand" to="/">
                        
                      </Link>

                      <Link className="navbar-brand" to="/contact">
                        <i class="fa-solid fa-envelopes"></i>
                      </Link>
                      <Link className="navbar-brand" to="/login">
                        <i class="fa fa-solid fa-right-to-bracket"></i>
                      </Link>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
export default Navbar;
