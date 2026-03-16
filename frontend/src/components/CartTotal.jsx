import React, {useContext} from 'react';
import Title from './Title'
import { ShopContext } from '../context/ShopContext';


const CartTotal = () => {
  const { currency, getCartAmount, delivery_fee} = useContext(ShopContext)
  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'CART'} text2={'TOTALS'}/>
      </div>
      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between border-b p-2'>
          <p>Subtotal</p>
          <p>{currency} {getCartAmount()}.00</p>
        </div>
        <div className='flex justify-between border-b p-2'>
          <p>Delivery amount</p>
          <p>{currency} {delivery_fee}.00</p>
        </div>
        <div className='flex justify-between border-b p-2'>
          <p className='font-medium'>Total</p>
          <p className='font-medium'>{currency} {getCartAmount() === 0 ? "0" :getCartAmount()+delivery_fee}.00</p>
        </div>
      </div>
    </div>
  )
}

export default CartTotal