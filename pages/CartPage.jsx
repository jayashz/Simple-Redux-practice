import React, { useEffect } from "react";
import Nav from "../src/component/Nav";
import { useSelector } from "react-redux";
import CartProd from "../src/component/CartUi/CartProd";
import CartItems from "../src/component/CartUi/CartItems";
const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const headStyle='headStyle font-bold ';
  let grandPrice=0;
 
  return (
    <>
      <Nav />
      <section className="flex flex-col items-center justify-center p-10">
        <div className="bg-blue-400 w-full p-10 rounded-lg">
          <div className="grid grid-cols-4 ">
            <p className={headStyle}>Product</p>
            <p className={headStyle}>Price</p>
            <p className={headStyle}>Quantity</p>
            <p className={headStyle}>Total</p>
          </div>
          {cart.items.map((i) => {
            grandPrice=grandPrice+Number(i.totalItemPrice);
            return <CartItems
              key={i.id}
              name={i.name}
              price={i.price}
              quantity={i.quantity}
              totalItemPrice={i.totalItemPrice}
            />
            })}
        <div >
            <h4 className="font-bold">Grand price</h4>
            <p>Rs. {grandPrice}</p>
        </div>
        </div>
      </section>
      
    </>
  );
};

export default CartPage;
