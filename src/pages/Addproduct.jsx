import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const Addproduct = () => {
   
    // const {brandName,name,image,type,price,rating,details}=product
    
    
    const handleadd= event => {
        event.preventDefault();
        const form =event.target
        const name=form.name.value
        const brandName=form.brandName.value
        const image=form.image.value
        const price=form.price.value
        const rating=form.rating.value
        const type=form.type.value
        const details=form.details.value
      const newproduct={name,brandName,image,price,rating,type,details,}
    //   console.log(newproduct)
        
        
     
         fetch('https://brand-shop-server-mauve-nu.vercel.app/products',{
             method:'POST',
             headers:{
               "content-type":'application/json'
             },
             body:JSON.stringify(newproduct)
         })
         .then(res=>res.json())
         .then(value=>{
             console.log(value)
             if(value.insertedId)
             toast.success("product updated")
         })
        }
    return (
        <div>
            <div className='bg-[#F4F3F0] p-24'>

                <form  onSubmit={handleadd}>
                    <div className='flex gap-2'>
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="image" placeholder="image url" className="input input-bordered w-full  "required />
                            </label>
                        </div>

                    </div>
                    <div className='flex gap-2'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text"> Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brandName" placeholder="Available Brand" className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="Product price" className="input input-bordered w-full"required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" placeholder=" rating" className="input input-bordered w-full" required />
                            </label>
                        </div>

                    </div>
                    <div className='flex gap-2'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="type" placeholder="product type" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Short description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="details" placeholder="product details" className="input input-bordered w-full"  required />
                            </label>
                        </div>

                    </div>
                    

                    <input type="submit" value="Add Product" className="btn btn-block mt-3" />
                    <input type="submit" value="Update Product" className="btn btn-block mt-3" />
                </form>
                
                <Toaster />
            </div>
           
        </div>
    );
};

export default Addproduct;