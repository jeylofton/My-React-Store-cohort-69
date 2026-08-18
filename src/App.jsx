import { BrowserRouter, Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Home from "./pages/Home"
import About from "./pages/About"
import Catalog from "./pages/Catalog";
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>

      <Navbar></Navbar>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
  
      <Footer></Footer>
    </BrowserRouter> 
  );
}

export default App;
