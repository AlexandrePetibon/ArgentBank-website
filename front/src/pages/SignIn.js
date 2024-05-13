import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { setLogIn } from "../redux/reducers/userAuthSlice";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userCredentials = { email, password };
    const resultAction = await dispatch(setLogIn(userCredentials));

    if (!resultAction.error) {
      remember
        ? localStorage.setItem("email", email)
        : localStorage.removeItem("email");

      setEmail("");
      setPassword("");
      navigate("/users");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <label>
          Remember me:
          <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
