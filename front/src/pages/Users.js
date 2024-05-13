// Users.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Account from "../components/Account";
import EditName from "../components/EditName";
import { setGetProfile, setNewUserName } from "../redux/reducers/profilSlice";
import { useNavigate } from "react-router-dom";
import { performApiAction } from "../service/api";

const Users = () => {
  const { token } = useSelector(state => state.auth);
  const profile = useSelector(state => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [toggleEditName, setToggleEditName] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        navigate("/");
      } else {
        try {
          const data = await performApiAction("getProfile", token, {});
          dispatch(setGetProfile(data));
        } catch (error) {
          console.log(error, "error");
        }
      }
    };
    fetchData();
  }, [token, dispatch, navigate]);

  const handleEditName = () => {
    setToggleEditName(!toggleEditName);
  };

  return (
    <div className="main account-bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {profile && profile.firstName && profile.lastName && `${profile.firstName} ${profile.lastName} !`}
        </h1>
        <button className="edit-button" onClick={handleEditName}>
          {!toggleEditName ? "Edit name" : "cancel"}
        </button>

        {toggleEditName && <EditName onSubmit={handleEditName} userName={profile && profile.userName} />}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        text="Available Balance"
      />
      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        text="Available Balance"
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        text="Current Balance"
      />
    </div>
  );
};

export default Users;
