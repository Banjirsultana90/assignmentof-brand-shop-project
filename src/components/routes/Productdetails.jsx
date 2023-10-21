import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router-dom';

const Productdetails = () => {
  const products = useLoaderData();
  const { _id } = useParams();

  const product = products.find((product) => product._id === _id);

  const handleAddToCart = async () => {
   const {brandName,name,image,type,price}=product
    const mydata={brandName,name,image,type,price}

    fetch('http://localhost:5000/cart',{
        method:'POST',
        headers:{
          "content-type":'application/json'
        },
        body:JSON.stringify(mydata)
    })
    .then(res=>res.json())
    .then(value=>{
        console.log(value)
    })
    
  };

  return (
    <div>
      {product ? (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={product.image} alt={product.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <p>{product.details}</p>
          </div>
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Toaster />
    </div>
    
  );
};

export default Productdetails;
