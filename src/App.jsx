import './App.scss';
import LiveParking from './components/LiveParking';
import Mainslide from './components/Mainslide';
import Bannerslide from './components/Bannerslide';
import Header from './components/Header';
// import Shortcut from './components/Shortcut';
import Notice from './components/Notice';
import Footer from './components/Footer';
import Payment from './components/Payment';


function App() {
  return (
    <div className="App">
      <Header />
      <Mainslide />
      {/* <Shortcut /> */}
      <Payment />
      <LiveParking />
      <Bannerslide />
      <Notice />
      <Footer />
    </div>
  );
}

export default App;
