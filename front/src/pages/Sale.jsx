import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainTwo from "../components/MainTwo";
import PicOne from "../components/PicOne";
import ThreePictures from "../components/ThreePictures";
import FourPic from "../components/FourPic";
import Scroll from "../components/Scroll";

const Sale = () => {
  return (
    <>
      <div className="homeContainer">
        <Header />
        <PicOne
          quote="this sale only for you my darling <3"
          span="if u want coupon link in button"
          //   button="Shop"
          button="click here to take coupon"
          image="https://media.istockphoto.com/id/598818910/vector/fifty-percents-sale-splash-paint.jpg?s=612x612&w=0&k=20&c=geFndiCdEc4JydFVf5AIF7RqOD15MRa9jfV_xjyCdl8="
        />
        <FourPic
          // title="Popular Right Now"
          image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b7aeb7e4-e0b8-495a-b6c1-a19119079e98/dri-fit-performance-select-big-kids-boys-crew-neck-training-sweatshirt-hCBNrr.png"
          imageTwo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO0MgmwRl_Sp4Rp8XcxNymAy3K2Bt_ksZ9NA&usqp=CAU"
          imageThree="https://i8.amplience.net/t/jpl/jdau_product_list?plu=jd_369335_al&qlt=85&qlt=92&w=320&h=320&v=1&fmt=auto"
          imageFour="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cd7dec31-ebf8-4a38-89ae-cf727004d280/shoe-box-bag-12l-Gn5kLH.png"
        />

        <div
          style={{
            width: "100vw",
            height: "auto",
            display: "flex",
            overflow: "scroll",
          }}
        >
          <Scroll
            span="Nike Air Max 90 Futura"
            image="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/3cd2a1a1-21ea-423c-9343-e1a47aac4d2d/air-max-90-futura-womens-shoes-kvRZ4h.png"
            price="166$"
            sale="50%"
          />{" "}
          <Scroll
            span="Nike Air Max 90 Futura"
            image="https://i.etsystatic.com/31945476/r/il/30e331/4127617035/il_1080xN.4127617035_i8ta.jpg"
            price="166$"
            sale="69.9%"
          />{" "}
          <Scroll
            span="Nike Air Max 90 Futura"
            image="data:image/jpeg;base64,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"
            price="166$"
            sale="55.9%"
          />{" "}
          <Scroll
            span="Nike Air Max 90 Futura"
            image="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/55e07dd1-12f9-49eb-a98f-b16729314966/air-presto-womens-shoes-LMdjZP.png"
            price="166$"
            sale="13%"
          />
          <Scroll
            span="Nike Air Max 90 Futura"
            image="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/1bd23340-f494-420b-a1f1-91214da76018/free-metcon-4-womens-training-shoes-pxHVt9.png"
            price="166$"
            sale="14%"
          />
          <Scroll
            span="Nike Air Max 90 Futura"
            image="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/daeb9e18-5a4b-48d4-9804-b0db8aaf8454/air-vapormax-plus-womens-shoes-xbt7zf.png"
            price="166$"
            sale="34%"
          />
        </div>
        <PicOne image="https://media.gq.com/photos/633322a0c97593b811197277/master/pass/nike-art.jpeg" />
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

export default Sale;
