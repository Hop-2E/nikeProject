import { Button } from "bootstrap";
import "../App.css";

const FourSmPicsNumTwi = ({
  title,
  type,
  typeTwo,
  typeThree,
  typeFour,
  image,
  imageTwo,
  imageThree,
  imageFour,
}) => {
  return (
    <div className="threePicsContainer">
      <h1 className="products3picSNUM">{title}</h1>
      <div className="products3picSNUM">
        <div className="threeProducts">
          <img src={image} alt="" className="threeImage" />
          <span className="threePicsType">{type}</span>
        </div>
        <div className="threeProducts">
          <img src={imageTwo} alt="" className="threeImage" />
          <span className="threePicsType">{typeTwo}</span>{" "}
        </div>
        <div className="threeProducts">
          <img src={imageThree} alt="" className="threeImage" />
          <span className="threePicsType">{typeThree}</span>{" "}
        </div>
        <div className="threeProducts">
          <img src={imageFour} alt="" className="threeImage" />
          <span className="threePicsType">{typeFour}</span>{" "}
        </div>
      </div>
    </div>
  );
};
export default FourSmPicsNumTwi;
