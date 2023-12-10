
import {  useEffect, useState } from 'react';
const CartItems = () => {
  const [cartItems, setCartItems] = useState([]);
 useEffect(() => {
   fetch(`http://localhost:8000/booking?email=${user.email}`)
     .then((res) => res.json())
     .then((data) => setCartItems(data));
      },[]);
    return [cartItems, setCartItems];
       
}

export default CartItems;