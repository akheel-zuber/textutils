// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
import About from './components/About';
import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
function App() {
  const [mode, setMode] = useState("light");
  const [labelText, setLabel] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);


  const showAlert = (type, message) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }


  const [myStyle, setStyle] = useState({
    color: "black"
  })

  const changeTheme = () => {
    if (mode === "dark") {
      setMode("light")
      setLabel("Enable Dark Mode")
      document.body.style.backgroundColor = "white";
      setStyle({ color: "black" });
      showAlert("success", "Light Mode has been Enabled")
      document.title = "TextUtils-Light Mode"
    }
    else {
      setMode("dark")
      setLabel("Enable Light Mode")
      document.body.style.backgroundColor = "#042743";
      setStyle({ color: "white" })
      showAlert("success", "Dark Mode has been Enabled")
      document.title = "TextUtils-Dark Mode"
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Textutils" Abouttext="About" mode={mode} labelText={labelText} changeTheme={changeTheme} />
        <Alert alert={alert} />
        <div className="container my-3 mb-4">
          <Routes>
            <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Try TextUtils-WordCounter, Character Counter, Remove Extra Spaces" mode={mode} style={myStyle} />}/>
            <Route exact path='/about' element={<About/>}/>
          </Routes>
        </div>
      </Router> 
    </>
  );
}

export default App;
