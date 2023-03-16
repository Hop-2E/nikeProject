import { Button } from "bootstrap";
import "../App.css";

const FourSmallPics = ({
  title,
  type,
  typeTwo,
  typeThree,
  typeFour,
  image,
  imageTwo,
  imageThree,
  imageFour,
  Button,
}) => {
  return (
    <div className="threePicsContainer">
      <h1 className="products3picSNUM">{title}</h1>
      <div className="products3picSNUM">
        <div className="threeProducts">
          <img src={image} alt="" className="threeImage" />
          <span className="threePicsType">{type}</span>
          <button className="picOneButton">{Button}</button>
        </div>
        <div className="threeProducts">
          <img src={imageTwo} alt="" className="threeImage" />
          <span className="threePicsType">{typeTwo}</span>{" "}
          <button className="picOneButton">{Button}</button>
        </div>
        <div className="threeProducts">
          <img src={imageThree} alt="" className="threeImage" />
          <span className="threePicsType">{typeThree}</span>{" "}
          <button className="picOneButton">{Button}</button>
        </div>
        <div className="threeProducts">
          <img src={imageFour} alt="" className="threeImage" />
          <span className="threePicsType">{typeFour}</span>{" "}
          <button className="picOneButton">{Button}</button>
        </div>
      </div>
    </div>
  );
};
export default FourSmallPics;
