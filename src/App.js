import Background from './components/Background';
import Birds from './components/Birds';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <div>
        <Navbar />
      </div>
      <div className='flex-1'>
        <Background />
        <Birds />
      </div>
      <Footer />
    </div>
  );
}

export default App;
