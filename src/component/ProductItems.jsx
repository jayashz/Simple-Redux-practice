import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
const ProductItems = ({ name, price, desc, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between px-3 py-5 shadow-xl rounded-lg mt-3">
      <div className="flex flex-col items-center p-2 min-w-[6rem] shadow-md rounded-lg">
        <h3>{name}</h3>
        <p>Rs.{price}</p>
      </div>
      <div className="px-2">
        <p>{desc}</p>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => {
          dispatch(cartActions.addItemToCart({
            id,
            price,
            name,
          }))
        }}
      >
        <FaCartArrowDown />
      </button>
    </div>
  );
};

export default ProductItems;
