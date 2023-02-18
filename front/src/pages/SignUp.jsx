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
    height: '10vh',
  },
  passwordInput: {
    display: 'flex',
    justifyContent: 'center',
    width: '460px',
    height: '8vh',
  },
  section: {
    width: '460px',
    height: '50vh',
    backgroundColor: 'blue',
  },
  input: {
    marginTop: '10px',
    height: '56px',
    width: '200px',
    borderRadius: '8px',
    marginRight: '10px',
    paddingLeft: '10px',
  },
  pInput: {
    height: '56px',
    width: '420px',
    borderRadius: '8px',
    marginRight: '10px',
    paddingLeft: '10px',
  },
  checker: {
    display: 'flex',
    height: '75px',
    width: '460px',
    flexDirection: 'column',
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
            <input style={styles.input} type="text" placeholder="Sur Name" />
          </div>
          <div style={styles.passwordInput}>
            <input
              style={styles.pInput}
              type="password"
              placeholder="Password"
            />
          </div>
          <div style={styles.checker}>
            <span>Minimum of 8 characters</span>
            <span>Uppercase, lowercase letters and one number</span>
          </div>
          <div style={styles.checkInput}>
            <input type="" />
            <input type="date" />
          </div>
          <span>Get a Nike Member Reward on your birthday.</span>
        </div>
        <div style={styles.bottom}>
          <div>
            <input type="checkbox" />
            <span>
              Sign up for emails to get updates from Nike on products, offers
              and your Member benefits.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
