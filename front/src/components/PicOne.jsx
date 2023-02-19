const PicOne = ({image, title}) => {
  
  return (
    <div className="picOneContainer">
      <p className="PicOneTitle">{title}</p>
      <img src={image} alt="" className="picOneImage" />
    </div>
  );
};
export default PicOne;
