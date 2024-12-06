
import './App.css';
<<<<<<< HEAD
=======
import Navbar from './component/Navbar';
>>>>>>> 02b6f5e (update 6 des)
import LandingPage from './page/LandingPage';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
=======
      <div className='navbar' style={{position:'sticky', top:'0', zIndex:'1000'}}>
        <Navbar/>
      </div>
>>>>>>> 02b6f5e (update 6 des)
      <LandingPage />
      <div className='scrollArrow'>
          <FaArrowUp/>
          <FaArrowDown/>
      </div>
    </div>
  );
}

export default App;
