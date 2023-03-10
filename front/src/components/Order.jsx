import React from "react";
import { useEffect, useState } from "react";
import { instance } from "../App";
import Product from "./Product";
import { useParams } from "react-router-dom";

function Order() {
  const params = useParams();
  const [product, setProduct] = useState();
  const [productId, setProductId] = useState();
  const getProduct = async () => {
    const res = await instance.get(`/user/${params.id}`);
    // const res2 = await instance.get(`/product/${productId}`);
    setProduct(
      res.data.data.Order.map((el) => {
        setProductId(el.productId);
        return el.productId;
      }),
      console.log( res.data.data.Order.map((el) => {
        return el.productId;}))
    );
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      {product &&
        product.map((el) => {
          return <Product el={el} />;
        })}
    </div>
  );
}

export default Order;