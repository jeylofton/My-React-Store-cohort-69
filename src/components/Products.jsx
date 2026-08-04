import "./Products.css";
import QuantityPicker from "./QuantityPicker";

function Product(props){
        
    return(
        <div className="product">
            <img
                className="product-image"
                src={`/image/${props.data.image}`}
                alt={props.data.title}
            />
            <h5>{props.data.title}</h5>
            <p>{props.data.category}</p>
            <div className="Prices">
                <label>Price: ${props.data.price.toFixed(2)}</label>
            </div>
            <QuantityPicker></QuantityPicker>
        </div>
    );
}

export default Product;
