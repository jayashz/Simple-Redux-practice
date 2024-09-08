import React from "react";
import { useSelector } from "react-redux";
import CartProd from "./CartProd";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="absolute bg-blue-300 rounded-lg flex flex-col items-center p-4 left-[-11rem] w-auto gap-2 ">
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
    </div>
  );
};

export default Cart;
