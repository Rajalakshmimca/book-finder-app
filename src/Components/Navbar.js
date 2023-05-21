import React from "react";
import "../App";
//import "./Navbar.css";
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "./Firebase/firebase";
import { handleAddToggleLogin } from "../redux/actions";
const Navbar = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
const {login, loggedUser}=useSelector((state)=>state);

const handleLogout = (e) => {
  signOut(auth)
    .then(() => {
     // setLoginLogin(!login);
    dispatch(handleAddToggleLogin(false));

      navigate("/");
      window.location.reload();
    })
    .catch((err) => console.log(err));
};

  return (
    <div className="navbar">
      <div className="navbar1">
        <h1>React Books App</h1>

        <div className="homeCont">
          <h3 className="home" onClick={() => navigate("/")}>
            Home
          </h3>
          <h3 className="favorite" onClick={() => navigate("/favorites")}>
            Your Favorites
          </h3>
          {!loggedUser && !login && (
            <h3 className="login" onClick={() => navigate("/Login")}>
              Login
            </h3>
          )}
          {loggedUser && login && (
            <h3 className="login" onClick={handleLogout}>
              Logout
            </h3>
          )}

          <h3 className="signup" onClick={() => navigate("/SignUp")}>
            SignUp
          </h3>
          <h3 className="profile" onClick={() => navigate("/Profile")}>
            Profile
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
