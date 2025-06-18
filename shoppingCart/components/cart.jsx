

import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import {removeFromCart} from '../redux/cartSlice';


const cart = () => {

    const cartData=useSelector((state)=>state.cart.items);
    //state.cart.items -> state means store me jao waha cart name ka slice hoga usme items name ka array hoga

    const dispatch=useDispatch();


  return (
    <div>
    {
        cartData.length>0 ? (
            <div>
            {
                cartData.map((value,index)=>(
                    <div key={index}>
                    <img src={value.image}/>
                    <p>{data.category}</p>
                    <p>{data.description}</p>
                    <p>{data.rating}</p>

                    <button onClick={()=>dispatch(removeFromCart(index))}>
                    Remove
                    </button>
                    </div>
                ))
            }
            </div>
        ) : (
            <p>no data available</p>
        )
    }
    </div>
  )
}

export default cart