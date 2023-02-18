const PicOne = (image) => {
  const styles = {
    div: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      height: 'auto',
      width: '90%',
    },
  };
  return (
    <div style={styles.div}>
      <img src={image.image} alt="" style={styles.image} />
    </div>
  );
};
export default PicOne;
