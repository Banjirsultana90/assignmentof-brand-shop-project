
import React from 'react';
import { Link } from 'react-router-dom';

const Singlebrands = ({ brands }) => {
    const { brandName, image } = brands;

    return (
        <Link to={`/products/${brandName}`}>
            <div className="card card-compact w-96 h-72 bg-base-100 shadow-xl">
                <figure>
                    <img   className="h-48 w-full" src={image} alt={brandName} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{brandName}</h2>
                </div>
            </div>
        </Link>
    );
};

export default Singlebrands;
