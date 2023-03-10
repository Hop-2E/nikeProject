import "../App.css";

const OneBgTwoSm = (inf) => {
  return (
    <div className="mainTwoContainer">
      <span className="mainTwoType">{inf.secName}</span>
      <div className="sectionContainer">
        <div
          className="outputContainerOne"
          style={{ backgroundImage: `url(${inf.photoOne})` }}
        >
          <div className="buttonContainer">
            <p className="picOneSpan" style={{ fontWeight: "bold" }}>
              CLOTHING
            </p>
            <button className="picOneButton">Shop</button>
          </div>
        </div>
        <div>
          <div
            className="OneBgTwoSmTWO"
            style={{ backgroundImage: `url(${inf.photoTwo})` }}
          >
            <div className="buttonContainer">
              <p className="picOneSpan " style={{ fontWeight: "bold" }}>
                SHOES{" "}
              </p>
              <button className="picOneButton">Shop</button>
            </div>
          </div>
          <br />
          <div
            className="OneBgTwoSmTWO"
            style={{ backgroundImage: `url(${inf.photoThree})` }}
          >
            <div className="buttonContainer">
              <p className="picOneSpan" style={{ fontWeight: "bold" }}>
                ACCESSORIES
              </p>
              <button className="picOneButton">Shop</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneBgTwoSm;
