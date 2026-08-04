import "./Products.css";
import QuantityPicker from "./QuantityPicker";

function Product({ product }){
        
    return(
        <div className="product">
            <img src={product.image} alt={product.title}/>
            <h5>{product.title}</h5>
            <p>{product.category}</p>
            <div className="Prices">
                <label>Price: ${product.price.toFixed(2)}</label>
            </div>
            <QuantityPicker></QuantityPicker>
        </div>
    );
}

export default Product;
