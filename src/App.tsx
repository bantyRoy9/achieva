import BannerSection from './components/banner';
import './App.css';
import Header from './components/Header';
import AboutSection from './sections/about';

function App() {
  return (
    <div className="App">
      <Header/>
      <BannerSection />
      <AboutSection/>
    </div>
  );
}

export default App;