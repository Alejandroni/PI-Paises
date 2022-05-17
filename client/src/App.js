import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom' //swtich para setear rutas
import LandingPage from './components/LandingPage';
import Home from './components/Home';

function App() {
  console.log("algo")
  return (
    
    <div className="App">
  
      <Routes>
  <Route path='/' element={<LandingPage/>} /> 
 <Route path='/home' element={<Home/>} />
      </Routes>
     
      <h1>ALGO</h1>
    </div>
   
  );
}

export default App;
