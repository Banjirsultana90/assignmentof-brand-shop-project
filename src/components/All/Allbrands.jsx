


import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import img1 from '../../assets/close-up-collection-make-up-beauty-products.jpg'
import img2 from '../../assets/collection-small-perfume-bottles.jpg'
import img3 from '../../assets/view-arrangement-with-make-up-brushes.jpg'

const Allbrands = () => {

    const { brandName } = useParams();
    const [products, setProducts] = useState([]);
    const [noProducts, setNoProducts] = useState(false);

    useEffect(() => {
        fetch(`https://y-1lm0ucbjk-banjir-sultanas-projects.vercel.app/products/`)
            .then((response) => response.json())
            .then((data) => {

                const filteredProducts = data.filter(product => product.brandName === brandName);
                // setProducts(filteredProducts);
                if (filteredProducts.length === 0) {

                    setNoProducts(true);
                } else {
                    setProducts(filteredProducts);
                }

            })
            .catch((error) => console.error(error));
    }, [brandName]);

    return (
        <div >
            <div className='mb-5'>
                <div className="carousel w-full h-72">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="relative w-full">
                            <img src={img1} className="w-full" alt="Image" />
                            <p className="absolute inset-0 flex items-center justify-center p-2 text-white text-4xl font-extrabold">
                                Finish the makeup with a soft touch of Dior
                            </p>
                        </div>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="relative w-full">
                            <img src={img2} className="w-full" alt="Image" />
                            <p className="absolute inset-0 flex items-center justify-center p-2 text-black  font-extrabold text-4xl">
                            Increasing fragance with Loreal
                            </p>
                        </div>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                     
                    <div id="slide3" className="carousel-item relative w-full">
                    <div className="relative w-full">
                            <img src={img3} className="w-full" alt="Image" />
                            <p className="absolute inset-0 flex items-center justify-center text-4xl p-2 text-white font-extrabold">
                            Finish the makeup with soft touch of Revlon
                            </p>
                        </div>
                       
                       
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                </div>
            </div>
            <h3 className='text-3xl font-bold' >Prducts for:{brandName}</h3>
            {noProducts ? (
                <p className='text-5xl pt-10 py-5  text-red-500'>No available products for{brandName}!!!!</p>
            ) : (
                <ul className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                    {products.map((product) => (
                        <li key={product._id}>
                            <div className="card card-compact w-80 bg-red-50 shadow-xl">
                                <figure>
                                    <img className='h-44 w-full ' src={product.image} alt={product.name} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-purple-600">{product.name}</h2>
                                    <div className='flex justify-between text-lg font-medium'>
                                        <h2>{product.brandName}</h2>
                                        <h2>{product.price}</h2>
                                    </div>
                                    <div className='flex justify-between text-lg font-medium'>
                                        <h2>{product.rating}</h2>
                                        <h2>{product.type}</h2>
                                    </div>
                                    <div className="card-actions justify-between">
                                        <Link to={`/product/${brandName}/${product._id}`}>
                                            <button className="btn btn-primary">Details</button>
                                        </Link>
                                        <Link to={`/update/${product._id}`}>
                                            <button className="btn btn-primary">Update</button></Link>

                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Allbrands;
