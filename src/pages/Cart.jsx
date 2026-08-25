import "./Cart.css";
import { Link } from "react-router";
import useStore from "../store/useStore";

function Cart(){

    //everything the page needs comes from the global store
    const cart = useStore((state) => state.cart);
    const updateQuantity = useStore((state) => state.updateQuantity);
    const removeFromCart = useStore((state) => state.removeFromCart);
    const clearCart = useStore((state) => state.clearCart);

    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const grandTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return(
        <div className="cart">
            <h1>Your Cart</h1>

            {
                cart.length == 0
                ? <div className="cart-empty">
                    <p>Ready to Complete the Purchase</p>
                    <Link className="btn btn-primary" to="/catalog">Browse the catalog</Link>
                </div>
                : <div className="d-flex flex-column gap-3">

                    {cart.map(item => (
                        <div className="card" key={item._id}>
                            <div className="card-body d-flex align-items-center gap-3 text-start">

                                <img
                                    className="cart-image"
                                    src={`/image/${item.image}`}
                                    alt={item.title}
                                />

                                <div className="flex-grow-1">
                                    <h5 className="card-title mb-1">{item.title}</h5>
                                    <p className="card-text cart-category">{item.category}</p>
                                </div>

                                <div className="cart-cell">
                                    <label>Price: ${item.price.toFixed(2)}</label>
                                </div>

                                <div className="d-flex align-items-center">
                                    <button
                                        className="btn-minus"
                                        onClick={() => updateQuantity(item._id, item.quantity - 1)}
                                        disabled={item.quantity === 1}
                                    > - </button>
                                    <label className="label-qty"> {item.quantity} </label>
                                    <button
                                        className="btn-plus"
                                        onClick={() => updateQuantity(item._id, item.quantity + 1)}
                                    > + </button>
                                </div>

                                <div className="cart-line-total">
                                    <label>Total: ${(item.price * item.quantity).toFixed(2)}</label>
                                </div>

                                <button
                                    className="btn btn-outline-primary"
                                    onClick={() => removeFromCart(item._id)}
                                >Remove</button>

                            </div>
                        </div>
                    ))}

                    <div className="card">
                        <div className="card-body d-flex align-items-center justify-content-between text-start">
                            <span>Items: {itemCount}</span>
                            <span className="cart-grand-total">Total: ${grandTotal.toFixed(2)}</span>
                            <button className="btn btn-primary" onClick={clearCart}>Clear Cart</button>
                        </div>
                    </div>

                </div>
            }
        </div>
    );
}

export default Cart;
