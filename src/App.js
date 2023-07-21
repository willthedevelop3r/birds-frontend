import Background from './components/Background';
import Home from './components/Home';
import GenerateBird from './components/GenerateBird';
import Navbar from './components/NavBar';
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
            <Route path='/generate' element={<GenerateBird />} />
            {/* Add more routes for other pages if needed */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
