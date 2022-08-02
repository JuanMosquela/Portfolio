import React from "react";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Outlet />
      </div>          
      
    </div>
  );
}

export default App;
