import React from 'react';
import Home from "./pages/home/home";
import Theme from "./pages/theme/theme";
import {Navbar} from "./components/navbar/navbar";

function App() {
  return (
    <React.Fragment>
      <Home />
      {/*  <Theme />*/}
        <Navbar />
    </React.Fragment>
  );
}

export default App;
