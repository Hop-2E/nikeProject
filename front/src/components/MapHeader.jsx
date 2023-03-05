import { Link } from "react-router-dom";
import { useState } from "react";
import "../App.css";

const MapHeader = () => {
  const [isClicked, setIsClicked] = useState(false);
  const searchTwo = () => {
    if (isClicked === false) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };
  return !isClicked ? (
    <>
      <div className="headerContainer">
        <div className="headerTypeOne">
          <div className="brands">
            <Link to="/JordanHome">
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
            <Link className="links" to="/retail">
              <span className="nikeJijigSaaral">Find a Store </span>
            </Link>
            <span className="nikeJijigSaaral">|</span>
            <span className="nikeJijigSaaral"> Help </span>
            <span className="nikeJijigSaaral">|</span>
            <span className="nikeJijigSaaral"> Join Us </span>
            <span className="nikeJijigSaaral">|</span>
            <Link className="links" to={"/SignUp"}>
              <span className="nikeJijigSaaral"> Sign Up</span>
            </Link>
          </div>
        </div>
        <div className="headerTypeTwo">
          <Link to={"/"}>
            <img
              className="nikeLogoOG"
              src={require("../images/nikeLogo.png")}
              alt=""
            />
          </Link>
          <div className="searchVerOne">
            <br />
            <div className="nikeNavbar">
              <Link className="links" to={"/Products"}>
                <span className="nikeNavTexts">New & Featured </span>
              </Link>
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
                className="nikeBagAndFavIcon"
              />
              <input placeholder="Search" type="text" id="nikeSearchInput" />
            </div>
          </div>
          <div className="nikeBagAndFav">
            <img
              className="nikeBagAndFavIcon"
              src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
              alt=""
            />

            <Link to="/Bag">
              <img
                className="nikeBagAndFavIcon"
                src="https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
                alt="https://cdn-icons-png.flaticon.com/512/54/54481.png"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="headerContainer">
        <div className="searchedFull">
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
                  className="nikeBagAndFavIcon"
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
          <div className="searched">
            <div className="taarsanUmnuud"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapHeader;
