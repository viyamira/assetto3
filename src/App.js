
import './App.css';
import Navbar from "./components/Navbar";
import footer from "./components/footer";
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/Navbar.css";

function App() {
  return (
    <div className="App"> 
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <footer/>
      </Router>
    </div>
  );
}

export default App;
