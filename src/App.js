import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='leftpanel'>
        <div className='app-heading'>
          <p>
            JETWEB <br/>
            BRINGING YOUR WEB <br/> IDEAS TO LIFE
          </p>
        </div>
        <div className='app-text'>
          Compelling responsive web sites that will delight your audience, efficient robust backend solutions
        </div>
      </div>
      <div className='rightpanel'>
       <div className='applinks'>
        <Link to='/contact'>Contact</Link>
        <Link to='/services'>Services</Link>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/profile'>Profile</Link>
       </div>
      </div>
    </div>
  );
}

export default App;
