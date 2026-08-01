import "./Products.css";
import QuantityPicker from "./QuantityPicker";

function Products(){
        
    return(
        <div className="product">
            <img src="https://picsum.photos/220/300" alt="Product"/>
            <h5>Title</h5>
            <div className="Prices">
                <label> Price </label>
                <label> Total </label>
            </div>
            <QuantityPicker></QuantityPicker>
        </div>
    );
}

export default Products;