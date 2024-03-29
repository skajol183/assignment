import './App.css';
import CityCards from './components/CityCards/CityCards';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import JavaScriptInterview from './components/JavaScriptInterview';
import Offers from './components/Offers/Offers';
import WorldsComp from './components/WorldsComp/WorldsComp';

function App() {
  return (
    <>
      <Header />
      <CityCards />
      <WorldsComp />
      <Offers />
      <Footer />
      {/* <JavaScriptInterview /> */}
    </>

  );
}

export default App;
