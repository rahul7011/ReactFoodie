import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  //Handling clearCart dispatch action
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const giveTotal = (cart) => {
    let sum = 0;
    cart.forEach((element) => {
      sum += element.price / 100;
    });
    return sum;
  };
  //Here we are subscribing to the (store.cart.items) and not the whole store(worst performance)
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="p-2 m-2 text-center">
      <h1 className="font-bold text-xl text-green-500">Cart Items</h1>
      {cartItems.length != 0 ? (
        <>
          <table class="table-auto m-3 ml-auto mr-auto">
            <thead>
              <tr>
                <th className="text-yellow-500">S.No</th>
                <th className="text-yellow-500">Name</th>
                <th className="text-yellow-500">Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.price / 100}</td>
                  </tr>
                );
              })}
              <tr>
                <td></td>
                <td className="font-bold text-lg">Total</td>
                <td className="font-bold text-lg text-orange-500">
                  {giveTotal(cartItems)}
                </td>
              </tr>
            </tbody>
          </table>
          <button
            className="bg-red-500 rounded-sm p-2 h-10 font-bold hover:text-white"
            onClick={() => handleClearCart()}
          >
            Clear Cart
          </button>
        </>
      ) : (
        <h1 className="text-xl text-red-600">Your cart is empty ! </h1>
      )}
    </div>
  );
};
export default Cart;
