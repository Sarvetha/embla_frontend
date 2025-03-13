import './App.css';
import AnimalSearch from './components/AnimalSearch';
import Navbar from './components/Navbar';

const App = () => {
  return(
    <div className='App'>
      <Navbar/>
      <AnimalSearch/>
    </div>
  );
};

export default App;
