import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileHeader from "../components/ProfileHeader";
import { instance } from "../App";

function UserHome() {
  const [firstname, setFirstname] = useState();
  const [birth, setBirth] = useState();
  const params = useParams();
  console.log(params);

  const UserData = async () => {
    const res = await instance.get(`./user/${params.id}`);
    console.log(res.data.data);
    setFirstname(res.data.data.firstName);
    setBirth(res.data.data.birthday);
  };

  useEffect(() => {
    UserData();
  }, []);

  return (
    <>
      <Header />
      <div className="userProfileContainer">
        <ProfileHeader />
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
      </div>
      <Footer />
    </>
  );
}

export default UserHome;
