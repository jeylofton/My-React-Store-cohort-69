import "./QuantityPicker.css";
import { useState } from "react";


function QuantityPicker(){
        const [quantity, setQuantity] = useState (1);

        function handleDecrease(){
            let nextVal = quantity -1;
            setQuantity(nextVal);
        }

        function handleIncrease(){
            let newVal = quantity +1;
            setQuantity(newVal);
        }

    return(
        <div>
        <button className="btn-minus" onClick={handleDecrease} disabled={quantity === 1}> - </button>
        <label className="label-qty"> {quantity} </label>
        <button className="btn-plus" onClick={handleIncrease}> + </button>
        </div>
    );
}

export default QuantityPicker;
