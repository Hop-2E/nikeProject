import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainTwo from "../components/MainTwo";
import PicOne from "../components/PicOne";
import ThreePictures from "../components/ThreePictures";
import FourPic from "../components/FourPic";
import Scroll from "../components/Scroll";
import OneBgTwoSm from "../components/OneBgTwoSm";

const Kids = () => {
  return (
    <>
      <div className="homeContainer">
        <Header />
        <PicOne
          quote="PLAY TO THE MAX"
          span="Add a burst of fun with the Air Max 97 and other essentials that play up their style"
          button="Shop kids air"
          image="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1344,c_limit/41d01f90-757d-43d1-a14e-d1bdeb154ca4/nike-kids-shoes-clothing-and-accessories-nike-com.jpg"
        />
        <OneBgTwoSm
          secName={"Shop The Essentials"}
          photoOne={
            "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1016,c_limit/826388b3-4135-4a21-8bc2-e576e23d130a/men-s-shoes-clothing-accessories.jpg"
          }
          photoTwo={
            "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_666,c_limit/35ea5938-e227-4c8c-a6ef-08c6a77bfc49/men-s-shoes-clothing-accessories.jpg"
          }
          photoThree={
            "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_646,c_limit/a40336a3-11f5-4de3-b84c-88128cd3b385/jordan.jpg"
          }
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
            image="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/baa2520d-49da-4a27-ab2c-7fb133fb3008/air-max-90-mens-shoes-6n3vKB.png"
            price="166$"
          />{" "}
          <Scroll
            span="Nike Air Max 90 Futura"
            image="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/514c0c6c-8c60-4d65-94c4-73158a3028be/invincible-3-mens-road-running-shoes-CLdFjq.png"
            price="166$"
          />{" "}
          <Scroll
            span="Nike Air Max 90 Futura"
            image="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-mens-shoes-5QFp5Z.png"
            price="166$"
          />{" "}
          <Scroll
            span="Nike Air Max 90 Futura"
            image="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/389b709e-5102-4e55-aa5d-07099b500831/blazer-mid-77-vintage-mens-shoes-nw30B2.png"
            price="166$"
          />
          <Scroll
            span="Nike Air Max 90 Futura"
            image="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/389b709e-5102-4e55-aa5d-07099b500831/blazer-mid-77-vintage-mens-shoes-nw30B2.png"
            price="166$"
          />
          <Scroll
            span="Nike Air Max 90 Futura"
            image="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/71f31754-9a02-4ca4-b0bd-7d791f3338b2/air-max-97-mens-shoes-LJmK45.png"
            price="166$"
          />
        </div>
        <PicOne
          quote="EVERY STEP IS A CHANCE
          TO FLY"
          span="Beyond"
          button="Shop All Jordan▶️"
          image="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1344,c_limit/5e4a0ef7-a2c9-483a-8e5b-45d8277db19d/men-s-shoes-clothing-accessories.jpg"
        />
        <ThreePictures
          title="More To Explore"
          image="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_441,c_limit/2676934d-303c-48d2-8050-4f9a0ef1a4b6/men-s-shoes-clothing-accessories.jpg"
          imageTwo="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_441,c_limit/d45c04f7-16ea-41b8-a347-5b2109b0d16e/men-s-shoes-clothing-accessories.jpg"
          imageThree="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_441,c_limit/6dffa553-5fdf-4b29-8734-708725a0489c/men-s-shoes-clothing-accessories.jpg"
          type="Shoes $70 and & Under"
          typeTwo="Must-Have Matching Sets"
          typeThree="Easy On & Off Shoes"
        />
        <ThreePictures
          title="Icons For Any Seasons"
          image="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_441,c_limit/2676934d-303c-48d2-8050-4f9a0ef1a4b6/men-s-shoes-clothing-accessories.jpg"
          imageTwo="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_441,c_limit/d45c04f7-16ea-41b8-a347-5b2109b0d16e/men-s-shoes-clothing-accessories.jpg"
          imageThree="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_441,c_limit/6dffa553-5fdf-4b29-8734-708725a0489c/men-s-shoes-clothing-accessories.jpg"
          type="Latest air max styles"
          typeTwo="Women's Clothes"
          typeThree="Wild Clothes"
        />
        <MainTwo
          secName={"Nike Running's Latest"}
          photoOne={
            "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_666,c_limit/5de609ea-33c4-4c4c-88bb-388b3cdab017/men-s-shoes-clothing-accessories.jpg"
          }
          photoTwo={
            "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_666,c_limit/4c8628f7-673b-433c-9bad-8ae426b6c954/men-s-shoes-clothing-accessories.jpg"
          }
          titleOne="Nike Pegasus 39"
          titleTwo=" Nike React Infinity 9"
          linkTo="Shop"
          linkToTwo="Shop"
        />
        <ThreePictures
          title="More To Explore"
          image="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_441,c_limit/b077e904-1330-4abc-8d75-58fdd1eb6357/men-s-shoes-clothing-accessories.jpg"
          imageTwo="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_441,c_limit/725c714a-4b1c-4b4f-91b5-1703e80fca6d/men-s-shoes-clothing-accessories.jpg"
          imageThree="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_441,c_limit/6dffa553-5fdf-4b29-8734-708725a0489c/men-s-shoes-clothing-accessories.jpg"
          type="Latest air max styles"
          typeTwo="Women's Clothes"
          typeThree="Wild Clothes"
        />
        <ThreePictures
          title="More To Explore"
          image="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_441,c_limit/2676934d-303c-48d2-8050-4f9a0ef1a4b6/men-s-shoes-clothing-accessories.jpg"
          imageTwo="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_441,c_limit/d45c04f7-16ea-41b8-a347-5b2109b0d16e/men-s-shoes-clothing-accessories.jpg"
          imageThree="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_441,c_limit/6dffa553-5fdf-4b29-8734-708725a0489c/men-s-shoes-clothing-accessories.jpg"
          type="Latest air max styles"
          typeTwo="Women's Clothes"
          typeThree="Wild Clothes"
        />

        <Footer />
      </div>
    </>
  );
};

export default Kids;
