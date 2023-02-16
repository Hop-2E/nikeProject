const PicThree2 = () => {
  const styles = {
    div: {
      display: 'flex',
      paddingLeft: '2%',
      paddingRight: '2%',
    },
    image: {
      height: 'auto',
      width: '30%',
      padding: '1%',
    },
  };
  return (
    <div>
      <img
        src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_441,c_limit/ec1c2d1d-2ba9-4b24-beaa-3d9df8bcdb0c/jordan.jpg"
        alt="Onepic"
        style={styles.image}
      />
      <img
        src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_441,c_limit/2f05fbe4-fff5-4082-914e-9066a2872bd9/jordan.jpg"
        alt="Secondpic"
        style={styles.image}
      />
      <img
        src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_441,c_limit/c9ab0191-820d-43c1-b5ed-360e830a82c1/jordan.jpg"
        alt="Thirdpic"
        style={styles.image}
      />
    </div>
  );
};
export default PicThree2;
