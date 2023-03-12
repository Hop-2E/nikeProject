import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Order from "../components/Order";
import Product from "../components/Product";
import { useParams } from "react-router-dom";
import { instance } from "../App";
import { useEffect } from "react";
const styles = {
  topContainer: {
    display: "flex",
    width: "100vw",
    justifyContent: "center",
    gap: "15px",
  },
  leftContainer: {
    width: "50vw",
    height: "50vh",
    flexDirection: "column",
    marginTop: "12px",
  },
  leftTop: {
    display: "flex",
    width: "48vw",
    flexDirection: "column",
    border: "1px solid grey",
    padding: "12px",
    gap: "5px",
  },
  leftBottom: {
    display: "flex",
    width: "48vw",
    flexDirection: "column",
    padding: "12px",
    gap: "5px",
  },
  rightContainer: {
    display: "flex",
    width: "25vw",
    marginTop: "12px",
    flexDirection: "column",
    gap: "20px",
  },
  rightTop: {
    display: "flex",
    width: "25vw",
    height: "33vh",
    flexDirection: "column",
    border: "1px solid grey",
    padding: "12px",
    gap: "10px",
  },
  rightBottom: {
    display: "flex",
    width: "25vw",
    height: "37vh",
    flexDirection: "column",
    gap: "20px",
  },
  rightBottomButton: {
    width: "25vw",
    height: "64px",
    borderRadius: "30px",
    border: "none",
    color: "grey",
    fontSize: "16px",
  },
  bottomContainer: {
    display: "flex",
    height: "600px",
    width: "100vw",
    gap: "15px",
    justifyContent: "center",
    flexDirection: "column",
  },
  favoriteText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "85px",
    width: "1000px",
    paddingLeft: "145px",
  },
  Suggestion: {
    width: "100%",
    height: "535px",
  },
};

function Bag() {
  // const params = useParams();
  const [data, setData] = useState([]);
  const [orderId, setOrderId] = useState();
  const getProductData = async () => {
    const res = await instance.get(`/product`);
    setData(res.data.data);
    console.log(res.data.data);
  };

  useEffect(() => {
    getProductData();
  }, []);
  return (
    <>
      <Header />
      <div style={styles.topContainer}>
        <div style={styles.leftContainer}>
          <div style={styles.leftTop}>
            <span style={{ fontSize: "20px" }}>Free Shipping for Members.</span>
            <span style={{ fontSize: "16px" }}>
              Become a Nike Member for fast and free shipping. Join us or
              Sign-in
            </span>
          </div>
          <div style={styles.leftBottom}>
            <span style={{ fontSize: "22px", marginLeft: "-12px" }}>Bag</span>
            {/* <span>There are no items in your bag.</span> */}
            <div key={Math.random()}>
              {" "}
              {data &&
                data.map((el) => {
                  return (
                    <div>
                      <Product el={el} key={Math.random()} /> 
                    </div> //All Products
                  );
                })}
            </div>
            <div style={{ display: "flex", width: "100px", height: "100px" }}>
              <Order />
            </div>
          </div>
        </div>
        <div style={styles.rightContainer}>
          <div style={styles.rightTop}>
            <span style={{ fontSize: "22px", height: "33px" }}>Summary</span>
            <div style={{ display: "flex", gap: "100px" }}>
              <span style={{ fontSize: "16px" }}>
                Do you have a Promo code?
              </span>
              <img
                style={{ width: "20px", height: "20px" }}
                src={require("../images/down.png")}
                alt=""
              />
            </div>
            <div style={{ display: "flex", gap: "243px" }}>
              <span style={{ fontSize: "16px" }}>Subtotal</span>
              <span style={{ fontSize: "30px", marginTop: "-14px" }}>-</span>
            </div>
            <div style={{ display: "flex", gap: "74px" }}>
              <span style={{ fontSize: "16px" }}>
                Estimated Shipping & Handling
              </span>
              <span>Free</span>
            </div>
            <div style={{ display: "flex", gap: "203px" }}>
              <span style={{ fontSize: "16px" }}>Estimated Tax</span>
              <span style={{ fontSize: "30px", marginTop: "-14px" }}>-</span>
            </div>
            <div style={{ display: "flex", gap: "269px" }}>
              <span>Total</span>
              <span style={{ fontSize: "30px", marginTop: "-14px" }}>-</span>
            </div>
            <br />
          </div>
          <div style={styles.rightBottom}>
            <button style={styles.rightBottomButton}>Checkout</button>
            <button style={styles.rightBottomButton}>PayPal</button>
          </div>
        </div>
      </div>
      <div style={styles.bottomContainer}>
        <div style={styles.favoriteText}>
          {/* <span style={{ fontSize: '22px' }}>Favorites</span> */}
          {/* <span style={{ color: '#111111' }}> */}
          {/* Want to view your favorites? Join us or Sign-in */}
          {/* </span> */}
        </div>
        {/* <div style={styles.Suggestion}>
          <div
            style={{
              width: '1400px',
              height: '50px',
              fontSize: '20px',
              paddingLeft: '50px',
              paddingTop: '10px',
            }}
          >
            You Might Also Like
          </div>
        </div> */}
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Bag;
