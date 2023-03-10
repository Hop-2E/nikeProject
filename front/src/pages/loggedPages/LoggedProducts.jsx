import "../App.css";
import { useEffect, useState } from "react";

import { instance } from "../App";
import LoggedHeader from "../components/LoggedHeader";
import Product from "../components/Product";
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
        <LoggedHeader />
        <div className="bigContainerOfProducts">
          <div className="productsRightNav">
            {product &&
              product.map((el) => {
                return <Product el={el} key={el._id} />;
              })}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Products;
