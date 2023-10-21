


import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import img1 from '../../assets/close-up-collection-make-up-beauty-products.jpg'
import img2 from '../../assets/collection-small-perfume-bottles.jpg'
import img3 from '../../assets/view-arrangement-with-make-up-brushes.jpg'

const Allbrands = () => {
    const { brandName } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/products/`)
            .then((response) => response.json())
            .then((data) => {

                const filteredProducts = data.filter(product => product.brandName === brandName);
                setProducts(filteredProducts);
            })
            .catch((error) => console.error(error));
    }, [brandName]);

    return (
        <div >
            <div>
                <div className="carousel w-full h-64">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={img1} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={img2} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={img3} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    
                </div>
            </div>
            <h2>Products for: {brandName}</h2>
            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {products.map((product) => (
                    <li key={product._id}>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure>
                                <img src={product.image} alt={product.name} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.name}</h2>
                                <h2>{product.brandName}</h2>
                                <h2>{product.price}</h2>
                                <h2>{product.rating}</h2>
                                <div className="card-actions justify-end">
                                    <Link to={`/product/${brandName}/${product._id}`}>
                                        <button className="btn btn-primary">Details</button>
                                    </Link>
                                    <Link></Link>
                                    <button className="btn btn-primary">Update</button>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Allbrands;
