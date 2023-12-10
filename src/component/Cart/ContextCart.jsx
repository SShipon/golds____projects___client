import {useContext} from 'react';
import CartSummery from '../CartSummery/CartSummery';
import CartDetail from '../CartDetail/CartDetail';
import { CartContext } from './Cart';

const ContextCart = () => {
    //   const [cartItems, setCartItems] = useState([]);

    const {cartItems} = useContext(CartContext);
    
//   const { user } = useContext(AuthContext);

//   useEffect(() => {
//     fetch(`http://localhost:8000/booking?email=${user?.email}`)
//       .then((res) => res.json())
//       .then((data) => setCartItems(data));
//   }, []);

  return (
    <div className="cart-main  container mx-auto mt-12 mb-12">
      <div className="cart-left">
        <h1 className="text-3xl font-bold text-black mb-2">Shopping Cart</h1>
        <hr className="mb-5 border-black w-[50%]" />
        <div className="flex flex-col gap-5">
          {cartItems.map((cartItem) => (
            <CartDetail
              key={cartItem._id}
              cartItem={cartItem}
            ></CartDetail>
          ))}
        </div>
      </div>
      <div className="cart-right">
        <h1 className="text-3xl font-bold text-black mb-2">Order Summery</h1>
        <hr className="mb-5 border-black  w-[50%]" />
        <CartSummery cartItems={cartItems}></CartSummery>
      </div>
    </div>
  );
};

export default ContextCart;
