import React from 'react';
import '../App.css';
import Header from '../components/Header';
import JordanFooterTop from '../components/JordanFooterTop';
import Footer from '../components/Footer';

function JordanHome() {
  return (
    <>
      <div className="homeContainer">
        {/* <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png"
        className="jordanLogo"
        alt="#"
      /> */}
        <Header />
        <JordanFooterTop />
        <Footer />
      </div>
    </>
  );
}

export default JordanHome;
