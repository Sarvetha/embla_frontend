import './App.css';
import './assets/styles/styles.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Explore from './components/Explore'

const App = () => {
  return(
    <div className='body d-flex flex-column min-vh-100'>
      <Navbar/>
      <Home/>
      <About/>
      <Explore/>
      <Footer/>
    </div>
  );
};

export default App;
