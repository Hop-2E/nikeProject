import React from "react";
import { useEffect, useState } from "react";
import { instance } from "../App";
import Product from "./Product";
import { useParams } from "react-router-dom";

const Order = () => {
  const params = useParams();
  const [product, setProduct] = useState();
  const [productId, setProductId] = useState();
  const getAllProduct = async () => {
    const res = await instance.get("/product");
    setProduct(
      res.data.data.map((el) => {
        setProductId(el._id);
        return el;
      })
    );
  };

  const getUsersProduct = async () => {
    const res = await instance.get(`/user/${params.id}`);
    const product = res.data.data.Order.map((el) => {
      // console.log(el);
      return el;
    });
    setProduct(product);
  };

  useEffect(() => {
    getUsersProduct();
  }, []);

  return (
    <div>
      {product &&
        product.map((el) => {
          return (
            <div key={Math.random()}>
              {/* <Product el={el} /> */}
            </div> //Ordered by User
          );
        })}
    </div>
  );
};

export default Order;
