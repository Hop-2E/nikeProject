import { Link } from "react-router-dom";
const PicOne = ({ image, quote, span, button }) => {
  return (
    <div className="picOneContainer">
      <img src={image} alt="" className="picOneImage" />
      <div className="picOneGoShop">
        <h1>{quote}</h1>
        <span className="picOneSpan">{span}</span>
        <Link className="links" to={"/Products"}>
          <button className="picOneButton">{button}</button>
        </Link>
      </div>
    </div>
  );
};
export default PicOne;
