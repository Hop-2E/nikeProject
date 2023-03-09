import React from 'react';
import { useEffect, useState } from 'react';
import { instance } from '../App';
import Product from './Product';
import { useParams } from 'react-router-dom';

function Order() {
    const params = useParams();
    const [product, setProduct] = useState();
    const getProduct = async () => {
      const res = await instance.get(`/user/${params.id}`);
      setProduct(
        console.log(res.data.data.Order),
        res.data.data.Order.map((el) => {
          return el;
        }),
      );
    };
    useEffect(() => {
      getProduct();
    }, [product]);
  return (
    <div>
      {product && product.map((el) => {
        return <Product el={el}  />;
      })}
    </div>
  )
}

export default Order