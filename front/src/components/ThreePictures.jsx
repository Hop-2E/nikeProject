import "../App.css";

import { Link } from "react-router-dom";

const ThreePictures = ({
  title,
  type,
  typeTwo,
  typeThree,
  image,
  imageTwo,
  imageThree,
}) => {
  return (
    <div className="threePicsContainer">
      <p className="products3pics">{title}</p>
      <div className="products3pics">
        <div className="threeProducts">
          <Link className="links" to={"/Products"}>
            <img src={image} alt="" className="threeImage" />
          </Link>
          <span className="threePicsType">{type}</span>
        </div>
        <div className="threeProducts">
          <Link className="links" to={"/Products"}>
            <img src={imageTwo} alt="" className="threeImage" />
          </Link>
          <span className="threePicsType">{typeTwo}</span>
        </div>
        <div className="threeProducts">
          <Link className="links" to={"/Products"}>
            <img src={imageThree} alt="" className="threeImage" />
          </Link>
          <span className="threePicsType">{typeThree}</span>
        </div>
      </div>
    </div>
  );
};

export default ThreePictures;
