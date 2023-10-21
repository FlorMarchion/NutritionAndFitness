import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import AdminHome from './components/Admin/Home/AdminHome';
import AdminNavBar from './components/Admin/Common/AdminNavBar';
import ProductsList from './components/Admin/Home/Lista de Productos/ProductsList';
import AdminGuides from './components/Admin/Home/Lista de Productos/AdminGuides.jsx';

export const App = () => {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Routes>
        <Route path="/navBar" element={<NavBar />} />
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />

        {/*------- Admin --------*/}
        <Route path="/adminHome" element={<AdminHome />} />
        <Route path="/adminNavBar" element={<AdminNavBar />} />
        <Route path="/productos" element={<ProductsList />} />
        <Route path="/guides" element={<AdminGuides />} />



      </Routes>
    </div>
  );
}