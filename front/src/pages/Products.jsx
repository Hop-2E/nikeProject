import "../App.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Products = () => {
  return (
    <>
      <div className="productsContainer">
        <Header />
        <div>
          <div className="productsLeftNav">
            <div className="choose">
              <div className="genderEquality">
                <p>Gender</p>
                <img src={require("../images/down.png")} alt="" />
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
          <div className="productsRightNav"></div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Products;