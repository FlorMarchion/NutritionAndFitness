import React, { useEffect } from "react";
import Modal from "react-modal";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home/Home";
import NavBar from "./components/navBar/NavBar";
import Plans from "./components/Plans";
import { Guides } from "./components/guides/Guides";
import Me from "./components/Me";
import Vlog from "./components/Vlog";
import Contact from "./components/Contact";
import Challenges from "./components/Challenges";
import { GuideDetails } from "./components/guides/GuideDetails";

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
