import { Routes, Route} from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import NavBar from './components/NavBar';



function App() {
  return (
    <div className="App">
      <header>
        <Link  className='site-logo' >#VanLife</Link>
        <nav>
          <Link to='/about' >About</Link>
        </nav>
      </header>
      <Routes>
        <Route  path='/about' element={< About />} />
      </Routes>
    </div>
  );
}

export default App;
