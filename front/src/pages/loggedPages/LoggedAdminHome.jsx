import { useState } from "react";

import "../../App.css";
import Footer from "../../components/Footer";
import LoggedHeader from "../../components/loggedComps/LoggedHeader";
import { instance } from "../../App";

const AdminHome = () => {
  const [price, setPrice] = useState();
  const [image, setImage] = useState();
  const [type, setType] = useState();
  const [title, setTitle] = useState();
  const [color, setColor] = useState();
  const [desc, setDesc] = useState();

  const ProductPost = async () => {
    const res = await instance.post("/product", {
      price: price,
      picture: image,
      type: type,
      title: title,
      color: color,
      description: desc,
    });
    try {
      window.localStorage.setItem("token", JSON.stringify(res.data.token));
      window.localStorage.setItem("user_id", JSON.parse(res.data.data._id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <LoggedHeader />
      <div className="adminContainer">
        <div className="productPost">
          <h2>Product Post</h2>
          <div className="inpContainer">
            <input
              type="text"
              className="inputsProdPost"
              placeholder="Product Image"
              onChange={(e) => setImage(e.target.value)}
            />
            <input
              type="text"
              className="inputsProdPost"
              placeholder="Product Price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              type="text"
              className="inputsProdPost"
              placeholder="Product Color"
              onChange={(e) => setColor(e.target.value)}
            />
            <input
              type="text"
              className="inputsProdPost"
              placeholder="Product Type"
              onChange={(e) => setType(e.target.value)}
            />
            <input
              type="text"
              className="inputsProdPost"
              placeholder="Product Description"
              onChange={(e) => setDesc(e.target.value)}
            />
            <input
              type="text"
              className="inputsProdPost"
              placeholder="Product Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={ProductPost} className="productPostButton">
              Post
            </button>
          </div>
        </div>
        <div className="productOrderApprove">
          <h2>Product Order Approve</h2>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminHome;
