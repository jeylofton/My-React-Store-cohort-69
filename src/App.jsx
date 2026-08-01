import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import QuantityPicker from "./components/QuantityPicker";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <QuantityPicker></QuantityPicker>
      <Footer></Footer>
    </div>
  );
}

export default App;