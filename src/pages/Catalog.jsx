import "./Catalog.css";
import Products from "../components/Products";

function Catalog(){
        
    return(
        <div>
            <h1>Check out our products</h1>
            <Products></Products>
            <Products></Products>
            <Products></Products>
        </div>
    );
}

export default Catalog;