import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/navbar';
import { URLManager } from './shared/url-manager';
import Theme from './pages/theme/theme';
import Home from "./pages/home/home";
import store from './store/store';


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