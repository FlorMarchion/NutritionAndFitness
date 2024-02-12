import React, { useEffect } from "react";
import Modal from "react-modal";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Plans from "./components/NavBar/items/Plans";
import { Guides } from "./components/NavBar/items/Guides";
import Me from "./components/NavBar/items/Me";
import Vlog from "./components/NavBar/items/Vlog";
import Contact from "./components/NavBar/items/Contact";
import Challenges from "./components/NavBar/items/Challenges";
import { GuideDetails } from "./components/NavBar/items/GuideDetails";

export const App = () => {

  useEffect(() => {
    Modal.setAppElement('.App');
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/me" element={<Me />} />
        <Route path="/vlog" element={<Vlog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/cardGuide" element={<GuideDetails />} />
      </Routes>
    </div>
  );
};

export default App;
