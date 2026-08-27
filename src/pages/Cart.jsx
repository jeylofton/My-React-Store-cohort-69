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

                    {/* column labels - hidden on mobile, where the rows stack */}
                    <div className="cart-head d-none d-lg-flex align-items-center gap-3">
                        <span className="cart-col-image"></span>
                        <span className="cart-col-item">Item</span>
                        <span className="cart-col-price">Price per item</span>
                        <span className="cart-col-qty">Quantity</span>
                        <span className="cart-col-total">Total cost</span>
                        <span className="cart-col-action"></span>
                    </div>

                    {cart.map(item => (
                        <div className="card" key={item._id}>
                            <div className="card-body d-flex align-items-center gap-3 text-start">

                                <img
                                    className="cart-image"
                                    src={`/image/${item.image}`}
                                    alt={item.title}
                                />

                                <div className="cart-col-item">
                                    <h5 className="card-title mb-1">{item.title}</h5>
                                    <p className="card-text cart-category">{item.category}</p>
                                </div>

                                <div className="cart-col-price cart-cell">
                                    <label>
                                        <span className="d-lg-none">Price: </span>
                                        ${item.price.toFixed(2)}
                                    </label>
                                </div>

                                <div className="cart-col-qty d-flex align-items-center justify-content-center">
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

                                <div className="cart-col-total cart-line-total">
                                    <label>
                                        <span className="d-lg-none">Total: </span>
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </label>
                                </div>

                                <div className="cart-col-action">
                                    <button
                                        className="btn btn-outline-primary"
                                        onClick={() => removeFromCart(item._id)}
                                    >Remove</button>
                                </div>

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
