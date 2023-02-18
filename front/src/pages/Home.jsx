import '../App.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import MainTwo from '../components/MainTwo';
import PicOne from '../components/PicOne';

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <Header />
        <MainTwo
          secName={"Basketball's Best"}
          photoOne={
            'https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/a3596a6c-d1ed-41c9-91f5-053d09c942c1/nike-sportswear-nsw.jpg'
          }
          photoTwo={
            'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7386fdbf-b7a7-4af1-af47-05127affa8a1/sportswear-tech-fleece-hoodie-kC99j3.png'
          }
          titleOne="Flight MVP"
          titleTwo="Flight MVP 2"
          typeOne="Collection"
          typeTwo="Collector"
        />
        <PicOne image="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1303,c_limit/3b29751e-eda0-4295-8051-bbe9e8cb9798/jordan.jpg" />
        <Footer />
      </div>
    </>
  );
};

export default Home;
