import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage';
import Imagechange from './Components/Imagechange';
import Textboxsummary from './Components/Textboxsummary';
function App() {
  return (
    <div className="App">
      <div><Homepage/></div>
      <div><Imagechange/></div>
      <div><Textboxsummary/></div>

    </div>
  );
}

export default App;
