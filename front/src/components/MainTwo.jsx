import "../App.css";

const MainTwo = ({
  typeOne,
  typeTwo,
  photoOne,
  photoTwo,
  titleOne,
  titleTwo,
  secName,
  linkTo,
  linkToTwo,
}) => {
  return (
    <div className="mainTwoContainer">
      <span className="mainTwoType">{secName}</span>
      <div className="sectionContainer">
        <div
          className="outputContainerOne"
          style={{ backgroundImage: `url(${photoOne})` }}
        >
          <div className="buttonContainer">
            <p className="nikeMainTypeText">{typeOne}</p>
            <p className="nikeMainTitleText">{titleOne}</p>
            <button className="linkTo">{linkTo}</button>
          </div>
        </div>
        <div
          className="outputContainerTwo"
          style={{ backgroundImage: `url(${photoTwo})` }}
        >
          <div className="buttonContainer">
            <p className="nikeMainTypeText">{typeTwo}</p>
            <p className="nikeMainTitleText">{titleTwo}</p>
            <button className="linkTo">{linkToTwo}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTwo;
