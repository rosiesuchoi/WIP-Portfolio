import './App.css';
import Cursor from './components/Cursor';
import NavBar from './components/NavBar';
import Project from './components/Project';

function App() {

  return (
    <div className="App">
      <img className='left' src="./left.png" alt="left" height={50} />
        <NavBar />
        <Project />
      <img className='right' src="./right.png" alt="right" height={50} />
      <Cursor />
    </div>
  );
}

export default App;
