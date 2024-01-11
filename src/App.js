// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
import Alert from "./component/Alert";
// let name = "Ankit";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //state variable to check whether darkmode is present or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const enableDark = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#19294a";
      showAlert("Dark is enabled.", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled.", "success");
    }
  };

  return (
    <>
    <Router>
      <Navbar
        title="TextHelp"
        Home="Home"
        About="About Us"
        mode={mode}
        enableDark={enableDark}
      />
      <div className="container" my-3="True">
        <Switch>
                <Route exact path="/about">
                  <About
                    mode = {mode}
                    enableDark = {enableDark}
                   />
                </Route>
                <Route exact path = "/">
                  <Textform
                    heading="Enter the text to analyze."
                    showAlert={showAlert}
                    mode={mode}
                    enableDark={enableDark}
                  />
                </Route>
        </Switch>
      
      </div>
    </Router>
    </>
  );
}
//react follows camelCase
export default App;
