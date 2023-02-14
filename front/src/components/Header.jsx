import "../App.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerTypeOne">
        <div className="brands">
          <img src={require("../images/Jumpman_logo.png")} className="logos" alt="#" />
          <img src={require("../images/Converse-logo.png")} className="logos" alt="#" />
        </div>
        <div className="signIn">
          <span>Find a Store</span>
          <hr />
          <span>Help</span>
          <hr />
          <span>Join Us</span>
          <hr />
          <span>Sign In</span>
        </div>
      </div>
      <div className="headerTypeTwo"></div>
      <div className="headerTypeThree"></div>
    </div>
  );
};

export default Header;
