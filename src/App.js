
import './App.css';
import Navbar from './component/Navbar';
import LandingPage from './page/LandingPage';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <div className='navbar' style={{position:'sticky', top:'0', zIndex:'1000'}}>
          <Navbar/>
      </div>
      <LandingPage />
      <div className='scrollArrow'>
          <FaArrowUp/>
          <FaArrowDown/>
      </div>
    </div>
  );
}

export default App;
