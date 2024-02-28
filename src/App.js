import logo from './logo.svg';
import './App.css';
import Herosection from './components/Herosection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className=" bg-gradient-to-br from-white to-yellow-200">
    <Header/>
        <Herosection/>
      <AboutSection/>
      <Footer/>
    </div>
  );
}

export default App;
