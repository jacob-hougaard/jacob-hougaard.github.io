import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Components/common/layout/Layout";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import DanishBoksen from "./Pages/Projects/Projects/DanishBoksen/danish-boksen";
import Intercount from "./Pages/Projects/Projects/Intercount/intercount";
import Smukfest from "./Pages/Projects/Projects/Smukfest/smukfest";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<About />} />
            <Route path={'/projects'} element={<Projects/>}  />
            <Route path={'/projects/danish-boksen'} element={<DanishBoksen/>}/>
            <Route path={'/projects/smukfest'} element={<Smukfest/>} />
            <Route path={'/projects/intercount'} element={<Intercount/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
