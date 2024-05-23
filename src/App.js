import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Hero from './Pages/Hero';
import Services from './Pages/Services';
import Work from './Pages/Work';
// import Nav from './Components/Nav';

import Loader from './Components/Loader';
import { useState, useEffect } from 'react';
import Contact from './Pages/Contact';
import About from './Pages/About';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() =>{
    // Simulate data fetching or other loading process here
    setTimeout(()=>{
      setIsLoading(false);
    }, 1000)
  }, []);

  return (
    <BrowserRouter>
    {isLoading ? <Loader/> : (
      <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/work' element={<Work/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
     )}
    </BrowserRouter>
  );
}

export default App;
