import "../App.css";
import { useEffect, useState } from "react";
import { instance } from "../App";
import Header from "../components/Header";
import Product from "../components/Product";
import Footer from "../components/Footer";

const Products = () => {
  const [product, setProduct] = useState();
  const [productId, setProductId] = useState();

  const getProduct = async () => {
    const res = await instance.get("/product");
    setProduct(
      res.data.data.map((el) => {
        setProductId(el._id);
        return el;
      })
    );
  };
  const Order = async () => {
    const res = await instance.post("/product/order", {
      productId: productId,
      user_id: JSON.parse(localStorage.getItem("user_id")),
    });
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
                    <button onClick={Order}>
                      <Product el={el} key={el._id} />
                    </button>
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