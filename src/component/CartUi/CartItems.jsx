import React from 'react'

const CartItems = ({name, price, totalItemPrice, quantity }) => {
  return (
    <div className='grid grid-cols-4'>
        <h4>{name}</h4>
        <p>Rs. {price}</p>
        <p className='ml-5'>{quantity}</p>
        <p>{totalItemPrice}</p>
    </div>
  )
}

export default CartItems