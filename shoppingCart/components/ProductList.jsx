
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux'

const ProductList = () => {

    const [Data,setData]=useState([]);

    const dispatch = useDispatch()


    const productList=async()=>{
        const response=await axios.get("https://fakestoreapi.com/products");
        const product=response.data;
        setData(product);
    };

    useEffect(()=>{
        productList();
    },[]);

  return (
    <div>
        {
            productList.map((value,index)=>{
                return(
                <div key={index}>
                    <img src={Data.image} />
                    <p>{data.description}</p>
                    <p>{data.category}</p>

                    <button onClick={()=>dispatch(addToCart(data))}>
                        Add to Cart
                    </button>
                </div>
                )
            })
        }
    </div>
  )
}

export default ProductList