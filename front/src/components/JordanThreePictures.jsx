import { Button } from 'bootstrap';
import '../App.css';

const JordanThreePictures = ({
  title,
  type,
  typeTwo,
  typeThree,
  image,
  imageTwo,
  imageThree,
  Button,
}) => {
  return (
    <div className="threePicsContainer">
      <p className="products3pics">{title}</p>
      <div className="products3pics">
        <div className="threeProducts">
          <img src={image} alt="" className="threeImage" />
          <span className="threePicsType">{type}</span>
          <button className="picOneButton">{Button}</button>
        </div>
        <div className="threeProducts">
          <img src={imageTwo} alt="" className="threeImage" />
          <span className="threePicsType">{typeTwo}</span>{' '}
          <button className="picOneButton">{Button}</button>
        </div>
        <div className="threeProducts">
          <img src={imageThree} alt="" className="threeImage" />
          <span className="threePicsType">{typeThree}</span>{' '}
          <button className="picOneButton">{Button}</button>
        </div>
      </div>
    </div>
  );
};

export default JordanThreePictures;
