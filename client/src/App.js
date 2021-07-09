import React from "react";
import Navbars from "./Components/Navbar";
import {Switch ,Route} from "react-router-dom";
import Home from "./Components/Home";
import Writeblogs from "./Components/Writeblogs";
import Aboutme from "./Components/Aboutme";
import Errors from "./Components/Error";

function App() {
  return (
    <>
    <Navbars/>
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/Writeblogs" component={Writeblogs}/>
    <Route path="/about" component={Aboutme}/>
    <Route component={Errors}/>
    </Switch>
   
    </>
  );
}

export default App;
