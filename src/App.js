import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menjelajah from './Pages/Home/Menjelajah';
import Exploration from './Pages/Exploration/Exploration';
import Recomendation from './Pages/Recomendation/Recomendation';
import About from './Pages/About/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div><Menjelajah/></div>}/>
        <Route path='/Exploration' element={<div><Exploration/></div>}/>
        <Route path='/Recomendation' element={<div><Recomendation/></div>}/>
        <Route path='/About' element={<div><About/></div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
