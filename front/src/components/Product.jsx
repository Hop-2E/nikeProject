import "../App.css";

const Product = ({ el }) => {
  console.log(el) // user_id orj ired bhi
  return (
    <div className="productContainer">
      <div className="pruducts">
        <img className="productImage" src={el.picture} alt="" />
        <div className="infoProduct">
          <span className="productTitle">{el.title}</span>
          <span className="grayProductText">{el.type}</span>
          <span className="grayProductText">{el.color}</span>
          <span className="productTitle">{el.price}Price</span>
          <span className="productTitle">{el.user_id}</span>
          <span className="productTitle">{el.productId}</span>
          <span className="productTitle">{el}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;