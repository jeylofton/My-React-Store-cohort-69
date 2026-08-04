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
        <div>
        <h1>Check out our {products.length} new products</h1>
        {products.map(prod => (
            <Product key={prod._id} data={prod} />
        ))}
        </div>
    );
}

export default Catalog;
