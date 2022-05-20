import './App.css';
import {Route, Routes} from 'react-router-dom' //swtich para setear rutas
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Actividades from './components/Actividades';

function App() {
  console.log("algo")
  return (
    
    <div className="App">
  
      <Routes>
      <Route path='/' element={<LandingPage/>} /> 
      <Route path='/home' element={<Home/>} />
      <Route path='/creacion' element ={<Actividades/>}/>
      </Routes>
    </div>
   
  );
}

export default App;
