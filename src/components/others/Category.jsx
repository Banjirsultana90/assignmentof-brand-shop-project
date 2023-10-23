import React from 'react';
import img1 from '../../assets/blue-cream.jpg'
import img2 from '../../assets/liquid-foundation.jpg'
import img3 from '../../assets/img-6-1.jpg'

const Category = () => {


    return (
        <>
        <h3 className='text-3xl my-5 text-amber-500 font-bold'>Upcoming Products</h3>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-3'>
            <div className="card   h-64 w-80 bg-slate-300 shadow-xl image-full">
                <figure><img src={img2} alt="Shoes" /></figure>
                <div className="card-body">

                    <p className=' flex justify-center items-center text-2xl font-semibold'>liquid foundation</p>

                </div>
            </div>
            <div className="card bg-slate-300 h-64 w-80  shadow-xl image-full">
                <figure><img src={img1} alt="Shoes" /></figure>
                <div className="card-body">

                    <p className='flex justify-center items-center text-2xl'>Cleanser</p>

                </div>
            </div>
            <div className="card  h-64 w-80 bg-slate-300 shadow-xl image-full">
                <figure><img src={img3} alt="Shoes" /></figure>
                <div className="card-body">

                    <p className='flex justify-center items-center text-2xl'>Matte lipprint</p>

                </div>
            </div>
        </div></>

    );
};

export default Category;