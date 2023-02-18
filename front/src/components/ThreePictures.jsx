import "../App.css";

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
          <img src={image} alt="" className="threeImage" />
          <span className="threePicsType">{type}</span>
        </div>
        <div className="threeProductImage">
          <img src={imageTwo} alt="" className="threeImage" />
          <span className="threePicsType">{typeTwo}</span>
        </div>
        <div className="threeProductImage">
          <img src={imageThree} alt="" className="threeImage" />
          <span className="threePicsType">{typeThree}</span>
        </div>
      </div>
    </div>
  );
};

export default ThreePictures;
