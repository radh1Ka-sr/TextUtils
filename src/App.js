import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "light";
    }
  };
  const [mode, setmode] = useState("light");
  document.body.style.backgroundColor = "grey";
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="Textutils1"
          aboutText="About"
          mode={mode}
          togglemode={togglemode}
        />

        <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
