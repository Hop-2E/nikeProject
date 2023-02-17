import "../App.css";

const MainTwo = ({
  typeOne,
  typeTwo,
  photoOne,
  photoTwo,
  titleOne,
  titleTwo,
  secName,
}) => {
  return (
    <div className="mainTwoContainer">
      <span className="mainTwoType">{secName}</span>
      <div className="sectionContainer">
        <div className="outputContainer" style={{backgroundImage: `url(${photoOne})`}}>
          <img className="photos" src={photoOne} alt="@-@" />
          <p>{typeOne}</p>
          <p>{titleOne}</p>
        </div>
        <div className="outputContainer">
          {/* <img className="photos" src={photoTwo} alt=";-;" /> */}
        </div>
      </div>
    </div>
  );
};

export default MainTwo;
