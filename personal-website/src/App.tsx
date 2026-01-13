import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Experiences from "./pages/Experiences/Experiences";
import Projects from "./pages/Projects/Projects";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;