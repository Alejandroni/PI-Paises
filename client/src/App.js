import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom' //swtich para setear rutas
import LandingPage from './components/LandingPage';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
<Route exact path='/' component={LandingPage} />
<Route exact path='/home' component={Home} />
      </Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
