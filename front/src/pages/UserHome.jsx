import "../App.css";
import Header from "../components/Header";
import { useState } from "react";
import Footer from "../components/Footer";

import Profile from "../components/Profile";
import Favourite from "../components/Favourite";

function UserHome() {
  const [profile, setProfile] = useState(false);
  const [order, setOrder] = useState(false);
  const [fav, setFav] = useState(false);

  const GOProfile = () => {
    setProfile(true);
    setOrder(false);
    setFav(false);
  };
  const GOOrder = () => {
    setOrder(true);
    setProfile(false);
    setFav(false);
  };
  const GOFav = () => {
    setFav(true);
    setOrder(false);
    setProfile(false);
  };

  return (
    <>
      <Header />
      <div className="userLinksContainer">
        <span onClick={GOProfile} className="userLinks">
          Profile
        </span>
        <span onClick={GOOrder} className="userLinks">
          Orders
        </span>
        <span onClick={GOFav} className="userLinks">
          Favorites
        </span>
      </div>
      <div>
        {!profile ? (
          <Favourite/>
        ) : (
          <Profile/>
        )}
      </div>
      <Footer />
    </>
  );
}

export default UserHome;
