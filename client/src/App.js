import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom' //swtich para setear rutas
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Actividades from './components/Actividades';
import Detail from './components/Detail';

function App() {
 
  return (
    <BrowserRouter>
    <div className="App">
        <Routes>
      <Route path='/' element={<LandingPage/>} /> 
      <Route path='/home' element={<Home/>} />
      <Route path='/actividades' element ={<Actividades/>}/>
      <Route path='/home/:id' element ={<Detail/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
