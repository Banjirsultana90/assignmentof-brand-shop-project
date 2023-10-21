import React from 'react';
import img1 from '../../assets/blue-cream.jpg'
import img2 from '../../assets/liquid-foundation.jpg'
import img3 from '../../assets/img-6-1.jpg'

const Category = () => {


    return (
        <><h3 className='text-3xl'>Upcoming Products</h3><div className='flex gap-2 mx-auto '>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={img2} alt="Shoes" /></figure>
                <div className="card-body">

                    <p>liquid foundation</p>

                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={img1} alt="Shoes" /></figure>
                <div className="card-body">

                    <p>Cleanser</p>

                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={img3} alt="Shoes" /></figure>
                <div className="card-body">

                    <p>Matte lipprint</p>

                </div>
            </div>
        </div></>

    );
};

export default Category;