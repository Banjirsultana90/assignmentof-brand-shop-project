import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router-dom';

const Form = () => {
    const product=useLoaderData()
    const {id}=useParams()
    // console.log(id)
    console.log(product);
    const {_id,brandName,name,image,type,price,rating,details}=product
    const handleupdate= event => {
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
         fetch(`http://localhost:5000/products/${_id}`,{
             method:'PUT',
             headers:{
               "content-type":'application/json'
             },
             body:JSON.stringify(newproduct)
         })
         .then(res=>res.json())
         .then(value=>{
             console.log(value)
             if(value.modifiedcount>0)
             toast.success("product updated")
         })
   

        }
    return (
        <div>
            <div className='bg-[#F4F3F0] p-24'>

                <form onSubmit={handleupdate}>
                    <div className='flex gap-2'>
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="image" placeholder="image url" defaultValue={image} className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>
                    <div className='flex gap-2'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text"> Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Product Name" defaultValue={name} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brandName" placeholder="Available Brand" defaultValue={brandName} className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="Product price" defaultValue={price} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" placeholder=" rating" defaultValue={rating} className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>
                    <div className='flex gap-2'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">type</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="type" placeholder="product type" defaultValue={type} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Short description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="details" placeholder="Coffee details" defaultValue={details} className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>
                    <input type="submit" value="Submit" className="btn btn-block mt-3" />

                    
                </form>
                {/* <button onClick={handleupdate}>Submit</button> */}


            </div>
        </div>
    );
};

export default Form;