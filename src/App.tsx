import './App.css';
import './assets/styles/styles.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Explore from './components/Explore';
import About from './components/About';
import Footer from './components/Footer';


const App = () => {
  return(
    <div className='body d-flex flex-column min-vh-100'>
      <Navbar/>
      <Home/>
      <Explore/>
      <About/>
      <Footer/>
    </div>
  );
};

export default App;
