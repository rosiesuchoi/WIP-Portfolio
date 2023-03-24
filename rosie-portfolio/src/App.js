import './App.css';
import Cursor from './components/Cursor';
import NavBar from './components/NavBar';
import Project from './components/Project';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Project />
      <Cursor />
    </div>
  );
}

export default App;
