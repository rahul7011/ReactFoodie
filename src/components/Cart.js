import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemQuantity from "./ItemQuantity";
const Cart = () => {
  //Handling clearCart dispatch action
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const giveTotal = (cart) => {
    let sum = 0;
    cart.forEach((element) => {
      sum += element.quantity * (element.price / 100);
    });
    return sum;
  };
  //Here we are subscribing to the (store.cart.items) and not the whole store(worst performance)
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  let globalIndex = 0;
  return (
    <div className="p-2 m-2 text-center">
      <div className="flex justify-between p-2">
        <h1 className="font-bold text-xl text-green-500">Cart Items</h1>
        {cartItems.length!==0 &&
          <button
            className="inline-block rounded bg-blue-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            onClick={() => handleClearCart()}
          >
            Clear Cart
          </button>
        }
      </div>
      {cartItems.length != 0 ? (
        <div className="flex flex-col">
          <table className="table-auto m-3">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-yellow-500 text-white">S.No</th>
                <th className="py-2 px-4 bg-yellow-500 text-white">Name</th>
                <th className="py-2 px-4 bg-yellow-500 text-white">Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => {
                for (let step = 0; step < item.quantity; step++) {
                  globalIndex++;
                  return (
                    <tr key={globalIndex}>
                      <td className="py-2 px-4 border">{globalIndex}</td>
                      <td className="py-2 px-4 border">{item.name}</td>
                      <td className="py-2 px-4 border">
                        ₹{item.price / 100}
                        <ItemQuantity obj={item} />
                      </td>
                    </tr>
                  );
                }
              })}
              <tr>
                <td></td>
                <td className="py-2 px-4 font-bold text-lg">Total</td>
                <td className="py-2 px-4 font-bold text-lg text-orange-500">
                  ₹{giveTotal(cartItems)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <h1 className="text-xl text-red-600">Your cart is empty ! </h1>
      )}
    </div>
  );
};
export default Cart;
