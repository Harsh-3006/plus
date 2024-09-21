import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// let name="harsh" //variable
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState(null);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // let toggleMode=()=>{
  //   if(mode==='light'){
  //     setMode('dark')
  //     document.body.style.backgroundColor='black'
  //     showAlert('Dark mode enabled','success')
  //   }
  //   if(mode==='dark'){
  //     setMode('light')
  //     document.body.style.backgroundColor='white'
  //     showAlert('Light mode enabled','success')
  //   }
  // }

  let toggleLMode = () => {
    setMode("light");
    document.body.style.backgroundColor = "white";
    showAlert("light mode enabled", "success");
  };

  let toggleDMode = () => {
    setMode("dark");
    document.body.style.backgroundColor = "black";
    showAlert("Dark mode enabled", "success");
  };

  let toggleRMode = () => {
    setMode("red");
    document.body.style.backgroundColor = "red";
    showAlert("Red mode enabled", "success");
  };

  let toggleGMode = () => {
    setMode("green");
    document.body.style.backgroundColor = "green";
    showAlert("green mode enabled", "success");
  };

  return (
    // jsx
    // <h1>hello word</h1> //this will going to create a problem because jsx can return onle one element at a time. so we wrap our multiple elements in one element as shown below
    <>
      {/* <h1>hellow world</h1>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          Learn React
        </a>
      </header>
    </div> */}
      {/* 1. maine yeh kara tha now i will write my own code  */}
      {/* 2. lekin ab maine us code ka component bana dea h navbar ke naam se nvbar componet mai jisko maine yaha pr import kia h */}
      <Router>
        <Navbar
          title="Text convertor"
          aboutText="About Us"
          mode={mode}
          toggleLMode={toggleLMode}
          toggleRMode={toggleRMode}
          toggleDMode={toggleDMode}
          toggleGMode={toggleGMode}
        />{" "}
        {/* toh ab mai es componet ko bahut jgha use kr skta hu jese ke kissi aur website mai. lekin agar meko us website ke navbar mai tohda chng krna hua jese ke about ke jgha contact to mai vo yaha se direct kr skta hu bajaye componet ke root directory mai code chnge krne ke jgha ussi tarekee ko props bola jese hai jese <Navbar title="harsh"> props can also be defined as componets ke andar ke parameters*/}
        <div>
          <Alert alert={alert} />
        </div>
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/textconvertor"
              element={
                <TextForm
                  Alert={showAlert}
                  heading="Enter your text to analyze"
                  mode={mode}
                />
              }
            />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  Alert={showAlert}
                  heading="Enter your text to analyze"
                  mode={mode}
                />
              }
            />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
      {/* <About/> */}
      {/* <TextForm Alert={showAlert} heading="Enter your text to analyze" mode={mode}/> */}
    </>
  );
}

export default App;
