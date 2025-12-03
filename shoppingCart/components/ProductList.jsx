
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
            Data.map((product,index)=>{
                return(
                <div key={index}>
                    <img src={product.image} />
                    <p>{product.description}</p>
                    <p>{product.category}</p>

                    <button onClick={()=>dispatch(addToCart(product))}>
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

/*
Note:-
product store me yesa dikhega,

{
  id: 1,
  title: "Men's Cotton Jacket",
  price: 55.99,
  description: "Great jacket...",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
}

*/
