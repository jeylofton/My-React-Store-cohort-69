import "./App.css";
import Catalog from "./components/pages/Catalog";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import QuantityPicker from "./components/QuantityPicker";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Catalog></Catalog>
      <Footer></Footer>
    </div>
  );
}

export default App;