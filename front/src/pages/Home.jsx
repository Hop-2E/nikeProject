import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NikeFooterTop from "../components/NikeFooterTop";
import JordanFooterTop from "../components/JordanFooterTop";
import MainTwo from "../components/MainTwo";
import PicOne from "../components/PicOne";
import ThreePictures from "../components/ThreePictures";

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <Header />
        <PicOne
          quote="SPRING IN YOUR STEP"
          span="Turn the fun up in the bright and bouncy Air VaporMax"
          button="Shop Men's Air"
          image="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/0a5aa15e-e49a-4b32-925c-8a848b234b79/nike-just-do-it.jpg"
        />
        <ThreePictures
          title="Popular Right Now"
          image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/lj4izcovokw5jtfzc82u/sportswear-club-fleece-hoodie-qzVJfR.png"
          imageTwo="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cb407ca7-49bb-4316-8153-9889227f9710/sportswear-tech-fleece-hoodie-Rhmk1c.png"
          imageThree="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c284b247-b701-4078-9469-231591df6323/sportswear-tech-fleece-hoodie-vKhp1p.png"
          type="Men's Clothes"
          typeTwo="Women's Clothes"
          typeThree="Wild Clothes"
        />
        <PicOne
          quote="ARTIST SERIES"
          span="Combining innovative art with familiar silhouettes, we’re creating a canvas for"
          button="Shop"
          image="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/c747ef67-329f-4bbf-81ad-5dff7e0d7ea5/nike-just-do-it.jpg"
        />
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
        <ThreePictures
          title="Popular Right Now"
          image="https://media.discordapp.net/attachments/1075701997770121216/1075711035287281745/247547cd-243e-4fe6-a458-16e9599a2109.webp"
          imageTwo="https://media.discordapp.net/attachments/1075701997770121216/1075711035853512755/640f315b-ab45-42fa-afce-e36581b48084.webp"
          imageThree="https://media.discordapp.net/attachments/1075701997770121216/1075711035006271538/sportswear-therma-fit-tech-pack-mens-winterized-crew-xpNWBR.jpeg"
          type="Men's Clothes"
          typeTwo="Women's Clothes"
          typeThree="Wild Clothes"
        />
        <NikeFooterTop />
        <JordanFooterTop />
        <Footer />
      </div>
    </>
  );
};

export default Home;
