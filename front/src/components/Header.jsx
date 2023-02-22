import { Link } from "react-router-dom";
import { useState } from "react";

import "../App.css";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const searchTwo = () => {
    if (isClicked === false) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };
  return (
    <div className="headerContainer">
      {!isClicked ? (
        <>
          <div className="headerTypeOne">
            <div className="brands">
              <Link to={"jordan"}>
                <img
                  src={require("../images/Jumpman_logo.png")}
                  className="jordanLogo"
                  alt="#"
                />
              </Link>
              <img
                src={require("../images/Converse-logo.png")}
                className="converseLogo"
                alt="#"
              />
            </div>
            <div className="signIn">
              <span className="nikeJijigSaaral">Find a Store </span>
              <span className="nikeJijigSaaral">|</span>
              <span className="nikeJijigSaaral"> Help </span>
              <span className="nikeJijigSaaral">|</span>
              <span className="nikeJijigSaaral"> Join Us </span>
              <span className="nikeJijigSaaral">|</span>
              <Link className="links" to={"/SignIn"}>
                <span className="nikeJijigSaaral"> Sign In</span>
              </Link>
            </div>
          </div>
          <div className="center">
            <div className="headerTypeTwo">
              <img
                className="nikeLogoOG"
                src={require("../images/nikeLogo.png")}
                alt=""
              />
              <div className="searchVerOne">
                <br />
                <div className="nikeNavbar">
                  <span className="nikeNavTexts">New & Featured </span>
                  <span className="nikeNavTexts">Men</span>
                  <span className="nikeNavTexts">Women</span>
                  <span className="nikeNavTexts">Kids</span>
                  <span className="nikeNavTexts">Accessories</span>
                  <span className="nikeNavTexts">Sale</span>
                </div>
                <div className="nikeSearch">
                  <img
                    onClick={searchTwo}
                    src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
                    alt=""
                    className="searchStyle"
                  />
                  <input
                    placeholder="Search"
                    type="text"
                    id="nikeSearchInput"
                  />
                </div>
              </div>
              <div className="nikeBagAndFav">
                <img
                  className="nikeBagAndFavIcon"
                  src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
                  alt=""
                />
                <img
                  className="nikeBagAndFavIcon"
                  src="https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
                  alt="https://cdn-icons-png.flaticon.com/512/54/54481.png"
                />
              </div>
            </div>
          </div>
          <div className="headerTypeThree">
            <p className="bannerOne">
              Free Shipping + Returns, Free Membership, Exclusive Products
            </p>
            <p className="bannerTwo">Save Up to 40%</p>
            <p className="bannerThree">Shop All Our New Markdowns</p>
          </div>
        </>
      ) : (
        <div className="center">
          <div className="headerTypeTwo">
            <img
              className="nikeLogoOG"
              src={require("../images/nikeLogo.png")}
              alt=""
            />
            <div className="searchVerOne">
              <div className="nikeSearch">
                <img
                  onClick={searchTwo}
                  src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
                  alt=""
                  className="searchStyle"
                />
                <input
                  placeholder="Search"
                  type="text"
                  id="nikeSearchInputTwo"
                />
              </div>
            </div>
            <span className="cancel" onClick={searchTwo}>
              cancel
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
