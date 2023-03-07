const PicOne = ({ image, quote, span, button }) => {
  return (
    <div className="picOneContainer">
      <img src={image} alt="" className="picOneImage" />
      <div className="picOneGoShop">
        <h1>{quote}</h1>
        <span className="picOneSpan">{span}</span>
        <button className="picOneButton">{button}</button>
      </div>
    </div>
  );
};
export default PicOne;
