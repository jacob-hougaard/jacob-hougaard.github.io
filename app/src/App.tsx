import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Components/common/layout/Layout";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import DanishBoksen from "./Pages/Projects/Projects/DanishBoksen/danish-boksen";
import Intercount from "./Pages/Projects/Projects/Intercount/intercount";
import Smukfest from "./Pages/Projects/Projects/Smukfest/smukfest";
import Muni from "./Pages/Projects/Projects/Muni/Muni";
import Mna from "./Pages/Projects/Projects/MNA/mna";
import Attrition from "./Pages/Projects/Projects/Attrition/attrition";
import Projects2 from "./Pages/Projects/projects2";

function App() {
  return (
    <div className="App">
      <div className={'app-wrapper'}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<About />} />
            <Route path={'/projects'} element={<Projects/>}  />
            <Route path={'/projects2'} element={<Projects2/>}></Route>
            <Route path={'/projects/danish-boksen'} element={<DanishBoksen/>}/>
            <Route path={'/projects/smukfest'} element={<Smukfest/>} />
            <Route path={'/projects/intercount'} element={<Intercount/>}/>
            <Route path={'/projects/muni'} element={<Muni/>}/>
            <Route path={'/projects/MandA'} element={<Mna/>}></Route>
            <Route path={'/projects/Attrition'} element={<Attrition/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
