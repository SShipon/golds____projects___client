

const reducer = (state, action) => {
  switch (action.type) {
    // ---------------update cart item----------------  //
    case 'SET_CART_ITEMS':
      return {
        ...state,
        cartItems: action.payload, //its for new data when the state changed
        // cartItems: action.payload সেটমেন্টটি অপরিবর্তনীয় ডেটা স্টেট আপডেট করার জন্য ব্যবহৃত হয়
      };

    // ---------------Delete item----------------  //
    case 'DELETE_CART_ITEM':
      const updatedCartItems = state.cartItems.filter(
        (cartItem) => cartItem._id !== action.payload
      );
      return {
        ...state,
        cartItems: updatedCartItems,
      };

    // ---------------Delete item----------------  //
    case 'DELETE_CART':
      return {
        ...state,
        cartItems: [],
      };

    // ---------------handleIncrease INCREMENT----------------  //
    case 'INCREMENT':
      const updatedCart = state.cartItems.map((cartItem) => {
        //we cant write _id directly,so write action.payload
        if (cartItem._id === action.payload) {
          // If the ID matches, update the quantity of this item
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        }
        // For items that don't match the ID, keep them unchanged
        return cartItem;
      });

      return {
        ...state,
        cartItems: updatedCart, // Update the cart items with the updated ones
      };

    // ---------------handleDecrease DECREMENT----------------  //
  
    case 'DECREMENT':
      const reduceCart = state.cartItems.map((cartItem) => {
        if (cartItem._id === action.payload) {
          if(cartItem.quantity>1){
            return {
              ...cartItem, //quantity bad e bki sob variable exact same thakbe name,img,price
              quantity: cartItem.quantity - 1, //sudhu quantity change hobe
            };
          }
        }
        return cartItem;
      });
  
      return {
        ...state,
        cartItems:reduceCart
      }
  
  
  
  
  
  
  
  
  }

  

    return state;
};

export default reducer;