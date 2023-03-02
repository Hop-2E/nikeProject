import "../App.css";
import { useEffect, useState } from "react";

import { instance } from "../App";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Products = () => {
  const [product, setProduct] = useState();
  const getProduct = async () => {
    const res = await instance.get("/products");
    // setProduct(res)
    console.log(res);
  };

  useEffect(() => {
    getProduct();
  }, []);

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
