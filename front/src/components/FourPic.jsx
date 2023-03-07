import "../App.css";

const FourPic = ({
  // title,
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
    <div className="fourPicsContainer">
      {/* <p className="products3pics">{title}</p> */}
      {/* <div className="products3pics"> */}
      <div className="">
        <img src={image} alt="" className="fourImageOne" />
        <span className="">{type}</span>
      </div>
      <div className="">
        <img src={imageTwo} alt="" className="fourImageTwo" />
        <span className="">{typeTwo}</span>
      </div>
      <div className="">
        <img src={imageThree} alt="" className="fourImageThree" />
        <span className="">{typeThree}</span>
      </div>
      <div className="">
        <img src={imageFour} alt="" className="fourImageFour" />
        <span className="">{typeFour}</span>
      </div>
      {/* </div> */}
    </div>
  );
};

export default FourPic;
