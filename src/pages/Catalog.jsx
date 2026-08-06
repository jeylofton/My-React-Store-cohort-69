import "./Catalog.css";
import Product from "../components/Products";
import { useState } from "react";
import DataService from "../services/dataService";

function Catalog(){

    const [products] = useState(() => {
        const service = new DataService();
        return service.getProducts();
    });
        
    return(
        <div className="catalog">
        <h1>Check out our {products.length} new products</h1>
        <div className="catalog-grid">
            {products.map(prod => (
                <Product key={prod._id} data={prod} />
            ))}
        </div>
        </div>
    );
}

export default Catalog;
