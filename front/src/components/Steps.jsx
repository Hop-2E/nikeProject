const Steps = () => {
  const styles = {
    Cont: {
      width: "100vw",
      height: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    SecCont: {
      width: "80%",
      height: "336px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    Steps: {
      width: "100%",
      height: "33%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    Number: {
      fontWeight: 800,
      fontSize: "72px",
    },
  };
  return (
    <>
      <div style={styles.Cont}>
        <div style={styles.SecCont}>
          {" "}
          <div style={styles.Steps}>
            <h1 style={styles.Number}>01</h1>
            <span>
              {" "}
              If you’ve logged into a Nike app, you’re already a Member—welcome!
              Sign in.
            </span>
          </div>
          <div style={styles.Steps}>
            <h1 style={styles.Number}>02</h1>
            <span>
              {" "}
              If not, join us and access Member Benefits in just three clicks.
            </span>
          </div>
          <div style={styles.Steps}>
            <h1 style={styles.Number}>03</h1>
            <span> It’s that easy. Now you’re a Member.</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Steps;
