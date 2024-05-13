// EditName.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewUserName } from "../redux/reducers/profilSlice";
import { performApiAction } from "../service/api";

const EditName = ({ onSubmit, userName }) => {
  const profile = useSelector(state => state.profile);
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [newUserName, setNewUserName] = useState(userName);

  const ChangeUserName = async (e) => {
    e.preventDefault();

    try {
      await performApiAction("editUser", token, { userName: newUserName });
      dispatch(setNewUserName({ editUserName: newUserName }));
      onSubmit();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleInputChange = (e) => {
    setNewUserName(e.target.value);
  };

  return (
    <section className="editName-content">
      <h1>Edit your username</h1>
      <form onSubmit={ChangeUserName}>
        {error && <p className="error-message">{error}</p>}
        <div className="input-wrapper">
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            id="userName"
            value={newUserName}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={profile && profile.firstName}
            readOnly
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={profile && profile.lastName}
            readOnly
          />
        </div>

        <button type="submit" className="sign-in-button">
          Save Changes
        </button>
      </form>
    </section>
  );
};

export default EditName;
