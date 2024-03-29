import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainTwo from "../components/MainTwo";
import PicOne from "../components/PicOne";
import ThreePictures from "../components/ThreePictures";
import Scroll from "../components/Scroll";
import FourPicture from "../components/FourPicture";

const Women = () => {
  return (
    <>
      <div className="homeContainer">
        <Header />
        <PicOne
          quote="MEET ZENVY LEGGINGS"
          span="Our softest leggings yet, with gentle support for your twit and turn."
          //   button="Shop"
          button="Explore Nike Leggings"
          image="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1344,c_limit/d6e4b7e4-fe74-405e-aef3-25753c82a6e8/women-s-shoes-clothing-accessories.jpg"
        />
        <FourPicture
          secName="Shop the Essentials"
          photoOne="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ae884452-eed5-463a-89a1-c7e262e55deb/sportswear-modern-fleece-womens-oversized-french-terry-crew-neck-sweatshirt-vcx8kK.png"
          photoTwo="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/84f76826-0f8e-498f-ad32-7e364644830d/sportswear-modern-fleece-womens-oversized-french-terry-hoodie-FkB7QP.png"
          photoThree="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/53a9aa29-f8ff-4dd0-aba9-dfab8b3742e8/sportswear-essentials-womens-t-shirt-V6cpm9.png"
        />
        <div className="center">
          <div
            style={{
              width: "80vw",
              height: "auto",
              display: "flex",
              overflow: "scroll",
            }}
          >
            <Scroll
              span="Nike Air Max 90 Futura"
              image="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/3cd2a1a1-21ea-423c-9343-e1a47aac4d2d/air-max-90-futura-womens-shoes-kvRZ4h.png"
              price="166$"
            />{" "}
            <Scroll
              span="Nike Air Max 90 Futura"
              image="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/94e70add-d590-4327-9b9c-c8a65b3cf541/air-max-270-womens-shoes-Pgb94t.png"
              price="166$"
            />{" "}
            <Scroll
              span="Nike Air Max 90 Futura"
              image="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/421160a3-e273-426b-9c13-9c7df2aca8de/invincible-3-womens-road-running-shoes-kC40R9.png"
              price="166$"
            />{" "}
            <Scroll
              span="Nike Air Max 90 Futura"
              image="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/55e07dd1-12f9-49eb-a98f-b16729314966/air-presto-womens-shoes-LMdjZP.png"
              price="166$"
            />
            <Scroll
              span="Nike Air Max 90 Futura"
              image="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/1bd23340-f494-420b-a1f1-91214da76018/free-metcon-4-womens-training-shoes-pxHVt9.png"
              price="166$"
            />
            <Scroll
              span="Nike Air Max 90 Futura"
              image="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/daeb9e18-5a4b-48d4-9804-b0db8aaf8454/air-vapormax-plus-womens-shoes-xbt7zf.png"
              price="166$"
            />
          </div>
        </div>
        <PicOne image="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1344,c_limit/88292906-8f2c-43f4-adc9-7c5b107776bc/women-s-shoes-clothing-accessories.jpg" />
        <MainTwo
          secName={"Basketball's Best"}
          photoOne={
            "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_666,c_limit/97ad9025-1390-4aea-ab7f-0b4ab3231d87/women-s-shoes-clothing-accessories.jpg"
          }
          photoTwo={
            "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_666,c_limit/e8c5c4ef-cf2e-49db-a44b-aeacdf83fcff/women-s-shoes-clothing-accessories.jpg"
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
          image="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_441,c_limit/7286a10f-76b3-49fa-b9f3-7cd46369963a/women-s-shoes-clothing-accessories.jpg"
          imageTwo="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_441,c_limit/9fd957c1-b818-4a2c-912a-1b577a44238b/women-s-shoes-clothing-accessories.png"
          imageThree="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_441,c_limit/93570e73-3cd6-4acd-bac4-6d7e37aa9ccd/women-s-shoes-clothing-accessories.jpg"
          type="Latest air max styles"
          typeTwo="Women's Clothes"
          typeThree="Wild Clothes"
        />
        <Footer />
      </div>
    </>
  );
};

export default Women;
