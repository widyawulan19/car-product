
import './App.css';
import LandingPage from './page/LandingPage';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <div className='scrollArrow'>
          <FaArrowUp/>
          <FaArrowDown/>
      </div>
    </div>
  );
}

export default App;
