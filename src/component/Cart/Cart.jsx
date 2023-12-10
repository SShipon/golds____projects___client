import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { AuthContext } from '../../Hooks/AuthProvider';
import './Cart.css';
import ContextCart from './ContextCart';
import reducer from './reducer';

export const CartContext = createContext();
const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalItem: 0,
};
const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //  const [cartItems, setCartItems] = useState([]);

  // ---------------fetch cart item ----------------  //
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:8000/booking?email=${user?.email}`)
      .then((res) => res.json())
      // .then((data) => setCartItems(data));
      .then((data) => {
        dispatch({ type: 'SET_CART_ITEMS', payload: data });
        // 'payload' হলো ডেটার বহনকারী,
        // এখানে, 'payload' মাধ্যমে নতুন ডেটা প্রেরণ করা হয়
        //এবং এই ডেটা নতুন 'cartItems' প্রোপার্টিতে সেট করার জন্য ব্যবহৃত হয়।
        // অতএব, 'payload' মাধ্যমে নতুন ডেটা স্টেটে পাঠানো হয় এবং সেটা স্টেটের নির্দিষ্ট অংশে যেতে সাহায্য করে, যাতে নতুন ডেটা অতএব স্টেট পরিবর্তন করতে পারে।
      });
  }, [user]);

  // ---------------Delete item----------------  //
  const handleDelete = (id) => {
    const proceed = window.confirm('are you sure ?');
    if (proceed) {
      const url = `http://localhost:8000/cartItem/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // Update cartItems in the state
          dispatch({ type: 'DELETE_CART_ITEM', payload: id });
        });
    }
  };

  // ---------------clear cart----------------  //
  const clearCart = () => {
    return dispatch({ type: 'DELETE_CART' });
  };

 // ---------------handleIncrease----------------  //
  const handleIncrease = (_id) => {
    const updatedCart = state.cartItems.map((cartItem) => {
      if (cartItem._id === _id) {
        const updatedQuantity = cartItem.quantity + 1;
        const updatedTotalPrice = updatedQuantity * cartItem.price;
        return {
          ...cartItem,
          quantity: updatedQuantity,
          totalPrice: updatedTotalPrice,
        };
      }
      return cartItem;
    });

    // Update the cart state with the updated cart items
    dispatch({
      type: 'INCREMENT',
      payload: updatedCart,
    });
  };

  
  

  // ---------------handleDecrease----------------  //
  const handleDecrease = (_id) => {
    const updatedCart = state.cartItems.map((cartItem) => {
      if (cartItem._id === _id) {
        if (cartItem.quantity > 1) {
          const updatedQuantity = cartItem.quantity - 1;
          const updatedTotalPrice = cartItem.price * updatedQuantity;  
          return {
            ...cartItem,
            quantity: updatedQuantity,
            totalPrice: updatedTotalPrice,
          };
        }
         else {
          // If the quantity is already 1, return the original cartItem
           return cartItem;
         }
      }
      return cartItem;
    });

    dispatch({
      type: 'DECREMENT',
      payload: updatedCart,
    });
  };

  const calculateTotal = (cartItems) => {
    return cartItems.reduce(
      (total, cartItem) => total + cartItem.totalPrice,
      0
    );
  };

  const total = calculateTotal(state.cartItems);
  console.log(total);

  return (
    <CartContext.Provider
      value={{
        ...state,
        handleDelete,
        clearCart,
        handleIncrease,
        handleDecrease,
        total,
      }}
    >
      <ContextCart></ContextCart>
    </CartContext.Provider>
  );
};

export default Cart;
