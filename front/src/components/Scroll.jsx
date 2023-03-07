// import '../App.css';

// const Scroll = (information) => {
//   const styles = {
//     image: {
//       width: '450px',
//       height: '450px',
//     },
//     type: {
//       fontSize: '16px',
//       fontWeight: 600,
//       marginLeft: '20px',
//     },
//     span: {
//       fontSize: '16px',
//       fontWeight: 900,
//       marginLeft: '20px',
//     },
//     Cont: {
//       marginLeft: '30px',
//     },
//   };
//   // return (
//   //   <div className="womenScrollContainer" style={styles.Cont}>
//   //     width: "450px",
//   //     height: "450px",
//   //   },
//   //   span: {
//   //     fontSize: "16px",
//   //     fontWeight: 600,
//   //   },
//   // };
//   return (
//     <div className="womenScrollContainer">
//       <div className="threeProducts">
//         <img src={information.image} alt="" style={styles.image} />
//         <div>
//           <span style={styles.span}>{information.span}</span>
//           <span style={styles.span}>${information.price}</span>
//           <br /> <span style={styles.type}>{information.ShoesType}</span>
//         </div>
//         </div>
//           <br />
//           <span style={styles.span}>{information.price}</span>
//         </div>
//       </div>{" "}
//     </div>
//   );  
// };
// export default Scroll;

import "../App.css";

const Scroll = (information) => {
  const styles = {
    image: {
      width: "450px",
      height: "450px",
    },
    span: {
      fontSize: "16px",
      fontWeight: 600,
    },
  };
  return (
    <div className="womenScrollContainer">
      <div className="threeProducts">
        <img src={information.image} alt="" style={styles.image} />
        <div>
          <span style={styles.span}>{information.span}</span>
          <br />
          <span style={styles.span}>{information.price}</span>
        </div>
      </div>
    </div>
  );
};
export default Scroll;
