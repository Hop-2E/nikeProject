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
  const Order = async (id) => {
    try {
      await instance.post("/product/order", {
        productId: id,
        user_id: JSON.parse(localStorage.getItem("user_id")),
      });
    } catch (error) {
      console.log(error)
    }
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
                console.log(el,"hi")
                return (
                  <div onClick={() => Order(el.productId)}>
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
