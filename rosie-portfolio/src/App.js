import './App.css';
import Cursor from './components/Cursor';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Project from './components/Project';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Project />
      <Cursor />
    </div>
  );
}

export default App;
