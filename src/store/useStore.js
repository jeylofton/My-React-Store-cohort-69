import { create } from "zustand";

/*
 * Global state for the store, using the Zustand API.
 *
 * create() takes a function that receives "set" and returns the state.
 * Any component can read a piece of this state with useStore(), and it
 * re-renders on its own when that piece changes - no props to pass down.
 */

const useStore = create((set) => ({

    //---- user ----
    user: {
        name: "Jey Lofton",
    },

    setUserName: (name) => set((state) => ({
        user: { ...state.user, name: name },
    })),

    //---- cart ----
    cart: [],

    addToCart: (product, quantity) => set((state) => {

        //is this product already in the cart?
        const existing = state.cart.find((item) => item._id === product._id);

        if (existing) {
            //bump the quantity of the line that is already there
            return {
                cart: state.cart.map((item) =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                ),
            };
        }

        //otherwise add it as a new line
        return {
            cart: [...state.cart, { ...product, quantity: quantity }],
        };
    }),

    //set a line to an exact quantity, never below 1
    updateQuantity: (productId, quantity) => set((state) => ({
        cart: state.cart.map((item) =>
            item._id === productId
                ? { ...item, quantity: Math.max(1, quantity) }
                : item
        ),
    })),

    removeFromCart: (productId) => set((state) => ({
        cart: state.cart.filter((item) => item._id !== productId),
    })),

    clearCart: () => set({ cart: [] }),
}));

export default useStore;
