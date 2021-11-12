import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import "./login.css";

import { login, logout, clearErrors } from "../../Redux/Actions/userActions";

const Login = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sidebar, setSidebar] = useState(false);

  const { user, isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      console.log("Logined successfully");
      alert.success(user.name);
    }

    if (loading && error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, loading, error, isAuthenticated]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className={sidebar ? "login active" : "login"} onClick={showSidebar}>
      <form className="login__form" onSubmit={submitHandler}>
        <div class="input--group">
          <input
            className="input"
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div class="input--group">
          <input
            className="input"
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button class="login__btn" type="submit">
          Login
        </button>
      </form>

      {/* <button type="submit" onClick={logoutHandler}>Logout</button> */}
    </div>
  );
};

export default Login;
