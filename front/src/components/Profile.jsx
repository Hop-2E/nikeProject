import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import { instance } from "../App";

const Profile = () => {
  const [firstname, setFirstname] = useState();
  const [birth, setBirth] = useState();
  const params = useParams();

  const UserData = async () => {
    const res = await instance.get(`/user/${params.id}`);
    console.log(params);
    console.log(res)
    setFirstname(res.data.data.firstName);
    setBirth(res.data.data.birthday);
  };

  useEffect(() => {
    UserData();
  }, []);
  return (
    <>
      <div className="userProfile">
        <div className="profile">
          <img
            className="userImage"
            src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
            alt=""
          />
          <div className="userInfo">
            <span className="userName">{firstname}</span>
            <span className="grayProductText">{birth}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
