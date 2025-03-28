import logo from './logo.svg';
import './App.css';
import CatGallery from './components/CatGallery';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      {/* <h1>Cat Gallery</h1> */}
      <Navbar /> 
      <CatGallery />
    </div>
  );
}

export default App;
