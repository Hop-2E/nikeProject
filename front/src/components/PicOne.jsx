const PicOne = ({image, title}) => {
  const styles = {
    div: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
  };
  return (
    <div className="picOneContainer">
      <p className="PicOneTitle">{title}</p>
      <img src={image} alt="" className="picOneImage" />
    </div>
  );
};
export default PicOne;
