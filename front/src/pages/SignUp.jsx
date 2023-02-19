import '../App.css';

const styles = {
  bigContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
  },
  signContainer: {
    width: '460px',
    height: '100vh',
    backgroundColor: 'yellow',
  },
  deedHeseg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '460px',
    height: '10vh',
    backgroundColor: 'red',
  },
  title: {
    width: '460px',
    height: '32px',
    fontSize: '28px',
  },
  nameInput: {
    display: 'flex',
    justifyContent: 'center',
    width: '460px',
    heigInputht: '10vh',
  },
  passwordInput: {},
  section: {
    width: '460px',
    height: '50vh',
    backgroundColor: 'blue',
  },
  input: {
    marginTop: '50px',
    height: '56px',
    width: '200px',
    borderRadius: '8px',
    marginRight: '10px',
    paddingLeft: '10px',
  },
};

const SignUp = () => {
  return (
    <div style={styles.bigContainer}>
      <div style={styles.signContainer}>
        <div style={styles.deedHeseg}>
          <img src="" alt="" />
          <div style={styles.title}>
            <span>Now let's make you a Nike Member.</span>
          </div>
        </div>
        <div style={styles.section}>
          <div style={styles.nameInput}>
            <input style={styles.input} type="text" placeholder="First Name" />
            <input style={styles.input} type="text" placeholder="Last Name" />
          </div>
          <div style={styles.passwordInput}>
            <input type="password" placeholder="Password" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
