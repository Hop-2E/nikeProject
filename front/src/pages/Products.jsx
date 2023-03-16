import "../App.css";
import { useEffect, useState } from "react";
import { instance } from "../App";
import Header from "../components/Header";
import Product from "../components/Product";
import Footer from "../components/Footer";

const Products = () => {
  const [product, setProduct] = useState();

  const getProduct = async () => {
    const res = await instance.get("/product");
    setProduct(
      res.data.data.map((el) => {
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
        <div className="bigContainerOfProducts">
          <div className="productsRightNav">
            {product &&
              product.map((el) => {
                return (
                  <div>
                    <Product el={el} key={el._id} />
                  </div>
                );
              })}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Products;
