import { BrowserRouter, Route, Router, Routes } from "react-router";
import "./App.css";
import Catalog from "./pages/Catalog";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


function App() {
  return (
    <BrowserRouter>

      <Navbar></Navbar>
      
      <Routes>
        <Route path="/" element={<h1>Welcome to my Homepage</h1>} />
      <Route path="/about" element={<h1>About Page</h1>} />
      </Routes>
  
      <Footer></Footer>
    </BrowserRouter> 
  );
}

export default App;
