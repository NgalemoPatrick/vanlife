import { Routes, Route} from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import NavBar from './components/NavBar';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route  path='/' element={< Home/>} />
        <Route  path='/about' element={< About />} />
      </Routes>
    </div>
  );
}

export default App;
