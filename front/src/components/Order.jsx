import React from 'react'
import { useEffect, useState } from 'react';
import { instance } from '../App';
import Product from './Product';

function Order() {
    const [product, setProduct] = useState();
    const getProduct = async () => {
        const res = await instance.get("/product");
        setProduct(res.data.data.map((el) => {
            console.log(el)
            return el;
        }))
    };
    useEffect(() => {
        getProduct();
    }, []);
  return (
    <div>
      {product && product.map((el) => {
        return <Product el={el} key={el._id} />;
      })}
    </div>
  )
}

export default Order