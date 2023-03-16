import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../App";
import ProductSearch from "../ProductSearch";
import { instance } from "../../App";

const LoggedHeader = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [product, setProduct] = useState();
  const [user, setUser] = useState();
  const [value, setValue] = useState();
  const [isAdmin, setIsAdmin] = useState(false);
  const params = useParams();

  const searchTwo = () => {
    if (isClicked === false) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };
  const getUserData = async () => {
    const res = await instance.get(`/user/${params.id}`);
  };
  const getProduct = async () => {
    const res = await instance.get("/product");
    setProduct(
      res.data.data.map((el) => {
        return el;
      })
    );
  };

  const checkAdmin = () => {
    if (user === "admin") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  };

  useEffect(() => {
    getProduct();
    getUserData();
  }, []);

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
            <Link to={"/Products"}>
              <img
                src={require("../images/Converse-logo.png")}
                className="converseLogo"
                alt="#"
              />
            </Link>
          </div>
          <div className="signIn">
            <Link className="links" to={"/retail"}>
              <span className="nikeJijigSaaral">Find a Store </span>
            </Link>
            <span className="nikeJijigSaaral">|</span>
            <span className="nikeJijigSaaral"> Help </span>
            <span className="nikeJijigSaaral">|</span>
            <span className="nikeJijigSaaral"> Join Us </span>
            <span className="nikeJijigSaaral">|</span>
            {!isAdmin === true ? (
              <>
                {" "}
                <Link className="links" to={"./AdminHome"}>
                  <span className="nikeJijigSaaral"> Admin Only </span>
                </Link>
                <span className="nikeJijigSaaral">|</span>
              </>
            ) : (
              <></>
            )}
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
              <Link className="links" to={"/Women"}>
                <span className="nikeNavTexts">Women</span>
              </Link>
              <span className="nikeNavTexts">Kids</span>
              <span className="nikeNavTexts">Accessories</span>
              <Link className="links" to={"/Sale"}>
                <span className="nikeNavTexts">Sale</span>
              </Link>
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

            <Link to="./Bag">
              <img
                className="nikeBagAndFavIcon"
                src="https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
                alt="https://cdn-icons-png.flaticon.com/512/54/54481.png"
              />
            </Link>
          </div>
        </div>
        <div className="headerTypeThree">
          <p className="bannerOne">
            Free Shipping + Returns, Free Membership, Exclusive Products
          </p>
          <p className="bannerTwo">Save Up to 40%</p>
          <p className="bannerThree">Shop All Our New Markdowns</p>
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
                  onChange={(e) => setValue(e.target.value)}
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
            <div className="taarsanUmnuud">
              {product &&
                product.map((el) => {
                  return (
                    el.title.includes(value) && (
                      <ProductSearch el={el} key={el._id} />
                    )
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoggedHeader;
