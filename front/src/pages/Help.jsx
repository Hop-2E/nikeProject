import "../App.css";

import MapHeader from "../components/MapHeader";
import Footer from "../components/Footer";

const Help = () => {
  return (
    <>
      <MapHeader />
      <div className="helpContainer">
        <h1 className="header">GET HELP</h1>
      </div>
      <div className="boxContainer">
        <table className="elementsContainer">
          <tr>
            <td>
              <input
                type="text"
                placeholder="What can we help you with?"
                className="search"
              />
            </td>
            <td>
              <img
                className="searchIcon"
                src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
              />
            </td>
          </tr>
        </table>
      </div>
      <div className="dundUgNuud">
        <div className="quick">
          <h1>QUICK ASSISTS</h1>
          <span>
            Answers to our most frequently asked questions are just one click
            away.
          </span>
          <hr className="hr" />
          <div className="bigBox">
            <div>
              <h6>SHIPPING & DELIVERY</h6>
              <p>What are Nike's shipping options?</p>
              <p>How do I get free shipping on Nike orders?</p> 
            </div>
            <div>
              <h6>RETURNS</h6>
              <p>What is Nike's return policy?</p>
              <p>How do I return my Nike order?</p> 
            </div>
            <div>
              <h6>NIKE MEMBERSHIP</h6>
              <p>What are Nike's shipping options?</p>
              <p>How do I get free shipping on Nike orders?</p> 
            </div>
            <div>
              <h6>ORDERS</h6>
              <p>What are Nike's shipping options?</p>
              <p>How do I get free shipping on Nike orders?</p> 
            </div>
            <div>
              <h6>COMPANY INFO</h6>
              <p>What are Nike's shipping options?</p>
              <p>How do I get free shipping on Nike orders?</p> 
            </div>
            <div>
              <h6>NIKE OFFERS</h6>
              <p>What are Nike's shipping options?</p>
              <p>How do I get free shipping on Nike orders?</p> 
            </div>
          </div>
        </div>
      </div>
      <div className="doodUgNuud">
        <div>
          <div>
            <h1>CONTACT US</h1>
          </div>
          <hr className="hr" />
          <div>
            <div className="bigBox">
              <div className="doggy">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/0/191.png"
                  alt=""
                  className="phoneStyle"
                />
                <p>anujin ajima</p>
                <p>99110003</p>
              </div>
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/0/191.png"
                  alt=""
                  className="phoneStyle"
                />
                <p>tselmeg ajimaa</p>
                <p>99110002</p>
              </div>
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/0/191.png"
                  alt=""
                  className="phoneStyle"
                />
                <p>battugs</p>
                <p>99110001</p>
              </div>
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/0/191.png"
                  alt=""
                  className="phoneStyle"
                />
                <p>tushig oppa</p>
                <p>99116989</p>
              </div>
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/0/191.png"
                  alt=""
                  className="phoneStyle"
                />
                <p>irdu oppa</p>
                <p>99119911</p>
              </div>
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/0/191.png"
                  alt=""
                  className="phoneStyle"
                />
                <p>barsaa oppa</p>
                <p>99110000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Help;
