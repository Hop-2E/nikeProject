import "../App.css";

const ProductSearch = ({ el }) => {
  return (
    <div className="productSearchContainer">
      <img className="productImage" src={el.picture} alt="" />
      <div className="infoProduct">
        <span className="goodText">{el.title}</span>
        <span className="godText">{el.type}</span>
        <span className="godText">{el.price}$</span>
      </div>
    </div>
  );
};

export default ProductSearch;
