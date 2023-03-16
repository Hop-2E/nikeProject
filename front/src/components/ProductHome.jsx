import "../App.css";
import Header from "../components/Header";
const ProductHome = () => {
  const Styles = {
    ProductHomeContainer: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    ProductHomeMainContainer: {
      width: "90%",
      height: "100vh",
      display: "flex",
      justifyContent: "space-evenly",
    },
    Image: {
      width: "435px",
      height: "auto",
    },
    Information: {
      width: "456px",
      display: "flex",
      flexDirection: "column",
    },
    RedMember: {
      color: "rgb(153, 46, 0)",
      fontWeight: 500,
      fontSize: "16px",
    },
    Title: {
      FontWeight: 500,
      LineHeight: "1.2",
      LetterSpacing: "0.007rem",
      fontSize: "28px",
      fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    },
    TypeOfShoes: {
      paddingBottom: "4px",
      fontWeight: 500,
      fontSize: "16px",
      LineHeight: "1.5",
    },
    PriceOfShoes: {
      fontWeight: 700,
      boxSizing: "inherit",
      color: "rgb(17, 17, 17)",
    },
    AddToBag: {
      width: "376px",
      height: "63px",
      border: "1.5px solid transparent",
      borderRadius: "30px",
      backgroundColor: "black",
      color: "white",
    },
    Fav: {
      width: "376px",
      height: "63px",
      border: "1.5px solid grey",
      borderRadius: "30px",
      backgroundColor: "white",
      color: "black",
    },
  };
  return (
    <>
      <Header />
      <br />
      <br />
      <div style={Styles.ProductHomeContainer}>
        <div style={Styles.ProductHomeMainContainer}>
          <img
            src="https://static.nike.com/a/images/t_PDP_1728_v1/26e69356-9de4-4b43-acfe-8d7037631363/dunk-low-se-womens-shoes-wXTkMh.png"
            alt=""
          />
          <div style={Styles.Information}>
            <p style={Styles.RedMember}>Member Access</p>
            <h2 style={Styles.Title}>Nike Dunk Low SE</h2>
            <h5 style={Styles.TypeOfShoes}>Women's shoes</h5>
            <br />
            <p style={Styles.TypeOfShoes}>$110</p>
            <br />
            <br />
            <button style={Styles.AddToBag}>Add to Bag</button>
            <br />
            <button style={Styles.Fav}>Favorite❤</button>
            <br />
            <br />
            <h5>Free Shipping</h5>
            <p>To get accurate shipping information </p>
            <br />
            <h5>
              Free Pickup at <strong>Nest Academy</strong>
            </h5>
            <br />
            <span>
              Lace up and make your mark in shoes that carry a legacy. A legend
              in the basketball world and an icon in skate culture, the Nike
              Dunk has been a sneaker favorite for decades. A durable canvas
              upper gives this special edition a new look and feel while
              screen-printed graphics celebrate the future.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductHome;
