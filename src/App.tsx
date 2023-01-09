import React, {useEffect} from 'react';
import Home from "./pages/home/home";
import Theme from "./pages/theme/theme";
import {Navbar} from "./components/navbar/navbar";
import {Route, Routes} from "react-router-dom";
import {URLManager} from "./shared/url-manager";
import {Provider} from "react-redux";
import store from "./store/store";


function App() {
    return (
        <Provider store={store}>
            <Routes>
                <Route path={URLManager.getHomeURL()} element={<Home/>}/>
                <Route path={URLManager.getThemeURL()} element={<Theme/>}/>
            </Routes>
            <Navbar/>
        </Provider>
    );
}

export default App;
