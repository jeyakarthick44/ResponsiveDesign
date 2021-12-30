import './App.css';
import Navbar from './Navbar';
import Rectangle from './Rectangle.png'

function App() {
  return (
    <div>
      <Navbar />
      <img class="top-image" src={Rectangle}/>
    </div>

  )
}

export default App;
