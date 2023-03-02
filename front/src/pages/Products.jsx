import "../App.css";
import { useEffect, useState } from "react";

import { instance } from "../App";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Products = () => {
  const [product, setProduct] = useState();
  const getProduct = async () => {
    const res = await instance.get("/product");
    setProduct(
      res.data.data.map((el) => {
        console.log(el);
        return el;
      })
    );
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div className="productsContainer">
        <Header />
        <div className="">
          <div className="productsLeftNav">
            <div className="choose">
              <div className="genderEquality">
                <p className="genders">Gender</p>
                <img
                  className="icons"
                  src={require("../images/down.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="productsRightNav">
            {product && 
              product.map((el) => {
                return 
              })}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Products;
