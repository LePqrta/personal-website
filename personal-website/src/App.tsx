import React from "react";
import { Outlet } from "react-router-dom"; // Import Outlet
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="main-content">
        {/* The Outlet renders the child route matching the current URL (Home, Projects, etc.) */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;