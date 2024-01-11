import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import Landing from './components/Landing';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Plans from './components/NavBar/items/Plans';
import Guides from './components/NavBar/items/Guides';
import Me from './components/NavBar/items/Me';
import Vlog from './components/NavBar/items/Vlog';
import Contact from './components/NavBar/items/Contact';
import Challenges from './components/NavBar/items/Challenges';



export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />}>
          <Route index element={<NavBar />} />
        </Route>
        <Route path='/plans' element={<Plans />} />
        <Route path='/guides' element={<Guides />} />
        <Route path='/me' element={<Me />} />
        <Route path='/vlog' element={<Vlog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/challenges' element={<Challenges />} />
      </Routes>

    </div>
  );
}
export default App;