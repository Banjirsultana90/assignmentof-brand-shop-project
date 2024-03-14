import React from 'react';
import toast from 'react-hot-toast';

import { Link, useLoaderData, useParams } from 'react-router-dom';

const Productdetails = () => {
  const products = useLoaderData();
  const { _id } = useParams();

  const product = products.find((product) => product._id === _id);

  const handleAddToCart = async () => {
   const {brandName,name,image,type,price,rating,details}=product
    const mydata={brandName,name,image,type,price,rating,details}

    fetch('https://brand-shop-server-mauve-nu.vercel.app/cart',{
        method:'POST',
        headers:{
          "content-type":'application/json'
        },
        body:JSON.stringify(mydata)
    })
    .then(res=>res.json())
    .then(value=>{
        console.log(value)
        // toast.success("product added")
    })
    
  };

  return (
    <div className='max-w-screen overflow-x-hidden'>
      {product ? (
        <div className="card card-compact w-96   bg-base-100 shadow-xl">
          <figure>
            <img className='h-64 w-full' src={product.image} alt={product.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-blue-600 text-2xl font-extrabold">{product.name}</h2>
            <p>{product.details}</p>
          </div>
          {/* <button className="btn btn-secondary" onClick={handleAddToCart}>
            Add to Cart
          </button> */}
          <Link to ="/checkout"><button>Add to cart</button></Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      
    </div>
    
  );
};

export default Productdetails;
