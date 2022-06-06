import React from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Proyects from "./components/proyects/Proyects";






function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Proyects />
      <Contact />
      <Footer />         
      
    </div>
  );
}

export default App;
