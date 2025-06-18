

import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import {removeFromCart} from '../redux/cartSlice';


const cart = () => {

    const cartData=useSelector((state)=>state.cart.items);

    const dispatch=useDispatch();

    
    const HandleRemove=(index)=>{
        dispatch(removeFromCart(index));
    }


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

                    <button onClick={()=>HandleRemove(index)}>
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