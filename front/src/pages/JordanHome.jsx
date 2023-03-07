import React from 'react';
import '../App.css';
import Header from '../components/Header';
import JordanFooterTop from '../components/JordanFooterTop';
import Footer from '../components/Footer';
import PicOne from '../components/PicOne';
import OneBgTwoSm from '../components/OneBgTwoSm';
import JordanThreePictures from '../components/JordanThreePictures';
import MainTwo from '../components/MainTwo';
import Scroll from '../components/Scroll';

function JordanHome() {
  const styles = {
    JordanLogo: {
      width: '100vw',
      height: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    UnderJordanLogo: {
      width: '100vw',
      height: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Roboto,sans-serif',
      fontWeight: 'bold',
    },
    UnderJordanLogoDiv: {
      width: '50%',
      height: 'auto',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      fontFamily: 'Roboto,sans-serif',
      fontWeight: 'bold',
    },
    Scroll: {
      width: '100vw',
      height: 'auto',
      overflow: 'scroll',
      display: 'flex',
    },
  };
  return (
    <>
      <div className="homeContainer">
        <Header />
        <div style={styles.JordanLogo}>
          <svg
            aria-hidden="false"
            class="_2eprOjqm"
            focusable="false"
            viewBox="4 2.5 16 17"
            role="img"
            width="91px"
            height="84px"
            fill="none"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M13.182 3.733c-.012-.039-.012-.039-.012-.072a.966.966 0 01.922-1.007.97.97 0 011.007.922.964.964 0 01-.917 1.007c-.027.004-.062 0-.101 0-.016.004-.04.004-.056.022-.056.084.14.073-.005.44 0 0 0 .038-.012.077-.012.14-.08.562-.096.793.029.04.04.05.029.13a6.003 6.003 0 01-.09.534c-.04.14-.096.174-.147.202-.073.298-.095.545-.281.905-.022.276-.045.35-.106.484-.017.4.01.46-.281 1.101-.08.3-.017.507.05.821.068.321.276.461.298.793.05.771.017 1.305-.163 1.907l.135.348c.18.084.618.326.36.675.343.19.865.394 1.28.781.176.147.35.315.513.5.316.057.276.08.506.231.675.438 1.749 1.304 2.373 1.906.112.067.147.112.236.163.01.023.017.034.01.04-.026.072-.026.072-.06.14.039.04.095.073.134.107.04.005.04-.006.096-.017.079.073.18.135.214.135.106-.022.084-.005.185-.1.029-.035.084 0 .084 0 .04-.04.113-.119.214-.176.079-.045.23-.045.23-.045.052.006.04.051.029.073-.057.023-.18.057-.247.108-.152.14-.276.353-.276.353.299-.033.484.045.719.023.136-.005.237.006.377-.09 0 0 .14-.096.265-.14.118-.05.23-.017.33.062.069.084.119.084 0 .196-.044.045-.1.096-.18.17-.133.123-.313.291-.5.432a3.11 3.11 0 01-.527.315c-.338.23-.26.174-.523.394-.03.022-.124.078-.163.106-.107.062-.135.006-.197-.118 0 0-.028-.045-.08-.14-.05-.107-.09-.23-.072-.23-.062-.007-.331-.344-.331-.41-.063-.013-.304-.26-.31-.31l-.214-.18c-.253.044-.31-.113-.961-.608-.08-.006-.197-.05-.36-.174-.298-.253-1.007-.815-1.124-.883-.13-.067-.281-.134-.383-.214-.146-.022-.218-.05-.298-.067-.08-.022-.14-.057-.326-.079-.303-.045-.618-.18-.911-.337-.14-.073-.264-.107-.382-.169-.27-.124-.506-.236-.686-.28a2.148 2.148 0 01-.568-.226c-.061-.034-.095-.06-.134-.073-.09-.022-.153.006-.192.022-.23.108-.438.203-.636.31-.18.09-.348.186-.528.286a7.971 7.971 0 01-.534.254s-.534.253-.832.348c-.26.197-.787.546-1.107.715-.158.073-.467.252-.608.292-.08.061-.371.258-.596.421-.18.124-.31.231-.31.231-.106.084-.101.13-.28.045a1.491 1.491 0 00-.13.096c-.14.095-.146.073-.202.067-.101.08-.113.04-.197.13-.061.084 0 .061-.118.106-.028.006-.04.04-.057.056-.094.073-.1.293-.325.304-.135.09-.107.203-.197.191 0 .102-.18.23-.214.23-.292.096-.304-.118-.646.035-.045.016-.113.072-.197.084-.152.022-.332-.006-.444-.102a1.93 1.93 0 01-.326-.398c-.051-.13-.017-.208.163-.332.073-.045.084-.079.208-.084.06-.024.045.01.15-.024.064-.016.064-.005.193-.005.028-.017.067-.022.124-.045.1-.034.196-.062.196-.062s.028-.023.124-.01c.078-.035.169-.08.214-.097-.012-.124.005-.124.06-.174.08-.062.09-.05.148-.01.022-.007.039-.013.027-.035-.01-.073-.061-.107-.045-.247-.022-.057-.061-.129-.05-.174.01-.045.028-.069.056-.079.029-.012.045.006.057.022.028.034.05.135.05.135.006.118.04.26.152.18.067-.062.084-.242.214-.203l.096.085c.084-.073.084-.073.14-.107 0 0-.08-.073-.012-.135.045-.039.108-.067.208-.175.276-.292.422-.42.714-.657a6.811 6.811 0 011.699-.939c.146-.174.28-.286.585-.304.377-.606 1.085-1.136 1.248-1.22.134-.23.19-.208.365-.247.135-.107.175-.107.23-.214.063-.23-.112-.86.383-.877.112-.146.078-.112.196-.248a2.19 2.19 0 01-.118-.5c-.005-.016-.196-.157-.13-.332a2.33 2.33 0 01-.268-.432.202.202 0 01-.063-.012c-.022-.005-.055-.005-.09-.005-.078.196-.163.208-.303.253-.26.512-.35.731-1.046 1.142-.28.298-.382.64-.382.634a.46.46 0 00-.012.321c-.045.107-.027.124-.027.124.01.045.056.106.106.112.079.023.169.023.158.118-.011.113-.163.09-.237.073-.275-.05-.185-.23-.365-.174-.141.085-.196.348-.416.31-.028-.023-.017-.074.006-.119.028-.06.084-.118.056-.14-.146.04-.433.123-.433.123-.135.04-.281-.039-.147-.124.063-.022.153-.05.265-.118 0 0 .062-.072-.057-.039a1.144 1.144 0 01-.416.045s-.257-.039-.292-.056c-.028-.022-.061-.107.017-.1a2.71 2.71 0 00.563-.068c.095-.035.28-.14.382-.186 0 0 .113-.157.18-.19.107-.114.19-.18.28-.299.09-.18.192-.46.5-.906a4.16 4.16 0 01.535-.646s.062-.338.343-.573c.063-.14.157-.31.259-.462a1.7 1.7 0 00.106-.168c.09-.13.186-.377.518-.41 0 0 .147-.102.197-.175.084-.073.074-.186.14-.259-.106-.106-.365-.309-.382-.573a.85.85 0 01.265-.692c.196-.185.398-.275.646-.258.309.055.366.157.455.258.09.101.13.04.163.146.259.073.248.045.237.236.045.057.106.108.1.214.085-.175.108-.208.344-.399.062-.157.1-.315.15-.478.052-.146.114-.298.154-.41-.04-.326.06-.377.196-.664-.022-.039-.016-.05-.006-.112.057-.192.136-.433.186-.596 0 0 .017-.063.085-.063.06-.202.157-.579.179-.663.062-.208.029-.287-.01-.41-.012-.04-.006-.09-.03-.136a5.483 5.483 0 01-.19-.41c-.028-.073-.08-.354-.08-.354-.004-.062-.004-.09-.004-.09z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div style={styles.UnderJordanLogo}>
          <div style={styles.UnderJordanLogoDiv}>
            <p>Jordan Home </p>
            <p>Jordan Basketball</p>
            <p>Purpose& Community</p>
            <p>New Releases</p>
          </div>
        </div>
        <PicOne
          quote="EVERY STEP IS A CHANCE
          TO FLY"
          span="Beyond"
          button="Shop All Jordan▶️"
          image="https://64.media.tumblr.com/35c6e43c1298d6e7a656f48738d30fab/tumblr_n6gfhcaPwU1s3gys4o1_400.gif"
        />{' '}
        <OneBgTwoSm
          secName={'SHOP JORDAN ICONS'}
          photoOne={
            'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1016,c_limit/a207e494-a4be-4dc6-ac3c-f7e248640b17/jordan.jpg'
          }
          photoTwo={
            'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_646,c_limit/0a76c4ad-0919-48f7-b6a7-6b37d1b36c3f/jordan.jpg'
          }
          photoThree={
            'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_646,c_limit/a40336a3-11f5-4de3-b84c-88128cd3b385/jordan.jpg'
          }
        />
        <JordanThreePictures
          title="JORDAN FOR THE ENTIRE FAM"
          image="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_428,c_limit/ede7aed9-2727-44e4-8778-569f222b9abb/jordan.jpg"
          imageTwo="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_428,c_limit/e105c322-4959-49c7-b450-122ec1aefb76/jordan.jpg"
          imageThree="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_428,c_limit/14b9c5ba-bfce-4d14-ba99-b3e13225b3d3/jordan.jpg"
          type="JORDAN MEN"
          typeTwo="JORDAN WOMEN"
          typeThree="JORDAN KIDS"
          Button="Shop"
        />
        <MainTwo
          secName={'THE LATEST FROM JORDAN'}
          photoOne={
            'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_646,c_limit/fec14520-1c1e-4249-b8d9-5933e177c0ab/jordan.jpg'
          }
          photoTwo={
            'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_646,c_limit/1dec5754-937a-43aa-aec6-fbb348a85714/jordan.jpg'
          }
          titleOne="ARTIST SERIES"
          titleTwo=" THE ALWAYS-IN-STYLE AJI"
          linkTo="Shop"
          linkToTwo="Shop"
        />
        <div style={styles.Scroll}>
          <Scroll
            image="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.8/w_428,c_limit/44d09b72-fa09-4bad-a5b5-406265761ad9/air-jordan-1-low-g-golf-shoes-jChrQ3.png"
            span="AIR JORDAN 1 LOW G"
            ShoesType="GOLF SHOES"
            price="140"
          />
          <Scroll
            image="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.8/w_428,c_limit/44d09b72-fa09-4bad-a5b5-406265761ad9/air-jordan-1-low-g-golf-shoes-jChrQ3.png"
            span="AIR JORDAN 1 LOW G"
            ShoesType="GOLF SHOES"
            price="140"
          />
          <Scroll
            image="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.8/w_428,c_limit/44d09b72-fa09-4bad-a5b5-406265761ad9/air-jordan-1-low-g-golf-shoes-jChrQ3.png"
            span="AIR JORDAN 1 LOW G"
            ShoesType="GOLF SHOES"
            price="140"
          />
          <Scroll
            image="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.8/w_428,c_limit/44d09b72-fa09-4bad-a5b5-406265761ad9/air-jordan-1-low-g-golf-shoes-jChrQ3.png"
            span="AIR JORDAN 1 LOW G"
            ShoesType="GOLF SHOES"
            price="140"
          />
          <Scroll
            image="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.8/w_428,c_limit/44d09b72-fa09-4bad-a5b5-406265761ad9/air-jordan-1-low-g-golf-shoes-jChrQ3.png"
            span="AIR JORDAN 1 LOW G"
            ShoesType="GOLF SHOES"
            price="140"
          />
        </div>
        <JordanThreePictures
          title="EXPLORE MORE FROM JORDAN
          "
          image="https://static.nike.com/a/images/f_auto/dpr_1.8,cs_srgb/w_423,c_limit/89d420b9-7e07-4f52-a3cb-e7731450faf3/jordan.jpg"
          imageTwo="https://static.nike.com/a/images/f_auto/dpr_1.8,cs_srgb/w_423,c_limit/6c3fddbd-438c-40df-afc5-21855e3747b2/jordan.jpg"
          imageThree="https://static.nike.com/a/images/f_auto/dpr_1.8,cs_srgb/w_423,c_limit/381998b0-b555-4a19-b27c-957d8fcf896b/jordan.jpg"
          type="JORDAN IN SNKRS"
          typeTwo="JORDAN BASKETBALL"
          typeThree="AIR JORDAN XI"
          Button="Explore"
        />
        <JordanFooterTop />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default JordanHome;
