import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate  } from "react-router-dom";
import { useAlert } from "react-alert";
import "./login.css";

import { login, logout, clearErrors } from "../../Redux/Actions/userActions";

const Login = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate('dashboard');
      alert.success("Logined Successfully");
    }

    if (loading && error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, loading, error, isAuthenticated, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div>
      <form className="login__form" onSubmit={submitHandler}>
        <div className="input--group">
          <input
            className="input"
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input--group">
          <input
            className="input"
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="login__btn" type="submit">
          Login
        </button>

        <button className="login__btn" type="submit">Logout</button>
      </form>

      
    </div>
  );
};

export default Login;
