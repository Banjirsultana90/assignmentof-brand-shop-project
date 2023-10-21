import React from 'react';

const Form = () => {
    return (
        <div>
            <div className='bg-[#F4F3F0] p-24'>

                <form >
                    <div className='flex gap-2'>
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="image" placeholder="image url" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>
                    <div className='flex gap-2'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text"> Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brandname" placeholder="Available Brand" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="Product price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" placeholder=" rating" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>
                    <div className='flex gap-2'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">type</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="type" placeholder="product type" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Short description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="short description" placeholder="Coffee details" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>
                    <div className='flex gap-2'>
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>

                    <input type="submit" value="Submit" className="btn btn-block mt-3" />
                </form>


            </div>
        </div>
    );
};

export default Form;