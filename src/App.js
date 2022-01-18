 /* eslint-disable */ 
import './App.css';
import Navbar from './components/navbars/Navbar';
import Padding from './components/padding/Padding';
import SlideContainer from './components/slideContainer/SlideContainer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Padding/>
      <SlideContainer />
    </div>
  );
}

export default App;
