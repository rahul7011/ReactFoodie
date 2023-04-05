import { useSelector,useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  //Handling clearCart dispatch action
  const dispatch=useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  //Here we are subscribing to the (store.cart.items) and not the whole store(worst performance)
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="p-2 m-2">
      <h1 className="font-bold text-xl">Cart Items</h1>
      <ul className="list-decimal p-2 m-2">
        {cartItems.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      {cartItems.length != 0 && (
        <button
          className="bg-red-500 rounded-sm p-2 h-10 font-bold hover:text-white"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
      )}
    </div>
  );
};
export default Cart;
