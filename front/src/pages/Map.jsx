import map from '../images/Map.png';
import MapHeader from '../components/MapHeader';
import Footer from '../components/Footer';
import MapComp from '../components/MapComp';
const Map = () => {
  const styles = {
    divCont: { height: 'auto', width: '100vw', display: 'flex' },
    divForspace: {
      width: '30vw',
      height: '100vh',
    },
    divOfOverflow: {
      width: '70vw',
      height: '100vh',
      overflow: 'scroll',
    },
    header: {
      position: 'sticky',
      top: '0',
    },
    title: {
      display: 'flex',
      justifyContent: 'space-evenly',
      flexDecoration: 'column',
      fontWeight: '500',
    },
    ShopsNearU: {
      color: '#757575',
      marginLeft: '15px',
      fontSize: '14px',
    },
  };
  return (
    <>
      <MapHeader style={styles.header} />{' '}
      <div style={styles.divCont}>
        <div style={styles.divForspace}>
          <div>
            <h4 style={styles.title}>Find a Nike Store</h4>
            <br />
            <div style={{ width: '10px' }}></div>
            <p style={styles.ShopsNearU}>1 Store near you</p>
            <MapComp></MapComp>
          </div>
        </div>
        <div style={styles.divOfOverflow}>
          <img src={map} alt="" style={{ width: '100vw', height: 'auto' }} />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Map;
