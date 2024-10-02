import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
const ProductItems = ({ name, price, desc, id, img }) => {
  
  const dispatch = useDispatch();

  return (
    <div className="p-8 shadow-xl rounded-lg mt-3 flex flex-col items-center relative h-[35rem] gap-4">
      <img src={img} alt="Product image" className="w-[18rem] h-[12rem] object-cover rounded-lg" />
      <div className="flex items-center flex-col p-2 min-w-[6rem] shadow-md rounded-lg">
        <h3>{name}</h3>
        <p>Rs.{price}</p>
      </div>
      <div className="px-2">
        <p>{desc}</p>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full absolute bottom-4 w-[80%] flex items-center justify-center"
        onClick={() => {
          dispatch(cartActions.addItemToCart({
            id,
            price,
            name,
          }))
        }}
      >
        <FaCartArrowDown size={20} />
      </button>
    </div>
  );
};

export default ProductItems;
