import BannerSection from './components/banner';
import './App.css';
import Header from './components/Header';
import AboutSection from './sections/about/about';
import SaleforceAccelerator from './sections/Accelerators';

function App() {
  return (
    <div className="App">
      <Header/>
      <BannerSection />
      <AboutSection/>
      <SaleforceAccelerator/>

    </div>
  );
}

export default App;