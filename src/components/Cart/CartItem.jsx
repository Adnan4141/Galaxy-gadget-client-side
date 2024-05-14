import { AiOutlineClose } from "react-icons/ai"; 

import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../../feature/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch(); // Get the dispatch function

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id )); // Dispatch the removeFromCart action with the item _id
  };

  const handleIncreaseQuantity = (id) => {
    console.log(id)
    console.log(item)
    dispatch(increaseQuantity( id )); // Dispatch the increaseQuantity action with the item _id
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id )); // Dispatch the decreaseQuantity action with the item _id
  };

  const itemPrice = Number(item.price)
  const price = (itemPrice*(item.quantity));
 


  return (
    <div
      key={item._id}
      className="flex flex-col rounded-lg bg-white sm:flex-row"
    >
      <img
        className="m-2 h-24 w-28 rounded-md border object-cover object-center"
        src={item?.image}
        alt=""
      />
      <div className="flex w-full flex-col px-4 py-4">
        <span className="font-semibold">{item?.model}</span>
        <span className="float-right text-gray-400">{item?.model}</span>
        <p className="text-lg font-bold">{price}</p>
        <div className="flex items-center space-x-2">
          <button
            className="px-2 py-1 bg-gray-200 rounded-md text-gray-700 focus:outline-none"
            onClick={() => handleDecreaseQuantity(item._id)}
          >
            -
          </button>
          <span className="px-2 py-1 bg-gray-200 rounded-md text-gray-700">
            {item.quantity}
          </span>
          <button
            className="px-2 py-1 bg-gray-200 rounded-md text-gray-700 focus:outline-none"
            onClick={() => handleIncreaseQuantity(item._id)}
          >
            +
          </button>
        </div>
      </div>
        <button onClick={() => handleRemoveFromCart(item._id)}><AiOutlineClose /></button>
    </div>
  );
};

export default CartItem;
