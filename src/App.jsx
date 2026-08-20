import { BrowserRouter, Route, Routes } from "react-router"
import "bootstrap/dist/css/bootstrap.min.css"

import "./App.css";
import "./theme.css";


import About from "./pages/About"
import Admin from "./pages/Admin"
import Catalog from "./pages/Catalog"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar></Navbar>
      
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/catalog" element={<Catalog/>}/>
          <Route path="/contact" element={<Contact/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
  
      <Footer></Footer>
      </div>
    </BrowserRouter> 
  );
}

export default App;
