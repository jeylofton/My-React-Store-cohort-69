import "./App.css";
import Catalog from "./pages/Catalog";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


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
