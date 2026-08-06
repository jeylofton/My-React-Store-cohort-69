import "./Products.css";
import QuantityPicker from "./QuantityPicker";
import { useState } from "react";

function Product(props){

    const [quantity, setQuantity] = useState(1);

    //runs every time the QuantityPicker changes the quantity
    function handleQuantityChange(newQuantity){
        setQuantity(newQuantity);
    }

    const total = props.data.price * quantity;

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
            <QuantityPicker onQuantityChange={handleQuantityChange}></QuantityPicker>
            <div className="Total">
                <label>Total: ${total.toFixed(2)}</label>
            </div>
        </div>
    );
}

export default Product;
