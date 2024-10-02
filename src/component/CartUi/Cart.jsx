import React from "react";
import { useSelector } from "react-redux";
import CartProd from "./CartProd";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="absolute bg-blue-300 rounded-lg flex flex-col items-center p-4 left-[-11rem] w-auto gap-2 z-30 ">
      
      {cart.items.map((i) => (
        <CartProd
          id={i.id}
          key={i.id}
          name={i.name}
          price={i.price}
          quantity={i.quantity}
          totalItemPrice={i.totalItemPrice}
        />
      ))}
      <Link className="mt-3 bg-blue-400 px-3 py-1 rounded-lg" to='/cart'>Open Cart</Link>
    </div>
  );
};

export default Cart;
