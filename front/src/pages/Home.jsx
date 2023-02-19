import "../App.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import MainTwo from "../components/MainTwo";
import PicOne from "../components/PicOne";
import ThreePictures from "../components/ThreePictures";

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <Header />
        <PicOne title="Just In" image="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1303,c_limit/3b29751e-eda0-4295-8051-bbe9e8cb9798/jordan.jpg" />
        <MainTwo
          secName={"Basketball's Best"}
          photoOne={
            "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/a3596a6c-d1ed-41c9-91f5-053d09c942c1/nike-sportswear-nsw.jpg"
          }
          photoTwo={
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7386fdbf-b7a7-4af1-af47-05127affa8a1/sportswear-tech-fleece-hoodie-kC99j3.png"
          }
          titleOne="Flight MVP"
          titleTwo="Flight MVP 2"
          typeOne="Collection"
          typeTwo="Collector"
          linkTo="Shop Nike Trail"
          linkToTwo="Shop Men's Trail"
        />
        <ThreePictures title="Popular Right Now" image="https://media.discordapp.net/attachments/1075701997770121216/1075711035287281745/247547cd-243e-4fe6-a458-16e9599a2109.webp"
          imageTwo="https://media.discordapp.net/attachments/1075701997770121216/1075711035853512755/640f315b-ab45-42fa-afce-e36581b48084.webp"
          imageThree="https://media.discordapp.net/attachments/1075701997770121216/1075711035006271538/sportswear-therma-fit-tech-pack-mens-winterized-crew-xpNWBR.jpeg"
          type="Men's Clothes"
          typeTwo="Women's Clothes"
          typeThree="Wild Clothes"
        />
        <Footer />
      </div>
    </>
  );
};

export default Home;
