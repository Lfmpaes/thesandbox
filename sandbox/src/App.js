import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Navbar from './navbar';
import Home from "./routes/home";
import About from "./routes/about";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/about' component={About}></Route>
    </div>
  );
}

export default App;
