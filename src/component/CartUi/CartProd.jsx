import React from "react";
import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";
const CartProd = ({ id, name, price, totalItemPrice, quantity }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-4 ml-[-4rem] ">
      <div className="flex flex-col w-[10rem] p-1 shadow-md rounded-lg bg-blue-400">
        <h3 className="text-center">{name}</h3>

      </div>
      <p>X{quantity}</p>
      <div className="flex gap-3">
        <button
          className="bg-blue-400 rounded-lg px-2 cursor-pointer"
          onClick={()=>{dispatch(cartActions.addItemToCart({
            id,
            price,
            name,
          }))}}
        >
          +
        </button>
        <button
          className="bg-blue-400 rounded-lg px-2 text-cente cursor-pointer"
          onClick={() => dispatch(cartActions.removeItemFromCart(id))}
        >
          -
        </button>
      </div>
    
    </div>
  );
};

export default CartProd;
