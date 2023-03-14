import { Link } from "react-router-dom";
const JoinUsFirstComp = ({ Title, quote, span, button }) => {
  return (
    <div className="picOneContainer">
      {" "}
      <span className="mainTwoType">{Title}</span> <br />
      <div className="picOneGoShop">
        <h1>{quote}</h1>
        <span className="picOneSpan">{span}</span>
        <Link className="links" to={"/Signup"}>
          <button className="picOneButton">{button}</button>
        </Link>
      </div>
    </div>
  );
};
export default JoinUsFirstComp;
