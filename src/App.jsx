import './App.scss';
import LiveParking from './components/LiveParking';
import Mainslide from './components/Mainslide';
import Bannerslide from './components/Bannerslide';
import Header from './components/Header';
// import Shortcut from './components/Shortcut';
import Notice from './components/Notice';
import Footer from './components/Footer';
import Payment from './components/Payment';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Dtnotice from './components/Dtnotice';


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/notice' element={<Dtnotice />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
