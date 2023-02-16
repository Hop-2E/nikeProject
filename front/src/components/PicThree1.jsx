const PicThree1 = () => {
  const styles = {
    imageOne: {
      width: 'auto',
      height: '100vh',
    },
    imageTwo: {
      width: 'auto',
      height: '49vh',
    },
    imageTwoOne: {
      width: 'auto',
      height: '49vh',
      marginTop: '1.6vh',
    },
    DivOne: {
      width: '50vh',
      height: 'auto',
      marginLeft: '10px',
    },
  };
  return (
    <div style={{ display: 'flex' }}>
      <img
        src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_1216,c_limit/fd6974c3-ec1e-49e6-a733-e65bbc5cc777/jordan.jpg"
        alt=""
        style={styles.imageOne}
      />
      <div style={styles.DivOne}>
        <img
          src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_906,c_limit/39911835-e3f0-4b69-a9dd-0e135ebe7a2d/jordan.jpg"
          alt=""
          style={styles.imageTwo}
        />
        <img
          src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_906,c_limit/cff4e1ab-2655-4e95-b08d-bc3d856d016a/jordan.jpg"
          alt=""
          style={styles.imageTwoOne}
        />
      </div>
    </div>
  );
};
export default PicThree1;
