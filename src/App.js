import './App.css';
import Home from './pages/Home.js'
import About from './pages/About.js'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
