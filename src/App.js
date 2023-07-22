import Background from './components/Background';
import Navbar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Birds from './components/Birds';
import GenerateBird from './components/GenerateBird';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <div>
          <Navbar />
        </div>
        <div className='flex-1'>
          <Background />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/birds' element={<Birds />} />
            <Route path='/generate' element={<GenerateBird />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
