import React from 'react';
import Home from "./pages/home/home";
import Theme from "./pages/theme/theme";
import { Navbar } from "./components/navbar/navbar";
import { Route, Routes } from "react-router-dom";
import {URLManager} from "./shared/url-manager";


function App() {
  return (
    <React.Fragment>
        <Navbar />
        <Routes>
                <Route path={URLManager.getHomeURL()} element={<Home />} />
                <Route path={URLManager.getThemeURL()} element={<Theme />} />
        </Routes>
    </React.Fragment>
  );
}

export default App;
