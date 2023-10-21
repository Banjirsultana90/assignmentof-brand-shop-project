

import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Allbrands from '../All/Allbrands';

const Products = () => {
  const brands = useLoaderData();

  return (
    <div >
      <h3>Brands: {brands.length}</h3>

      {
        brands.map(brand=><Allbrands key={brand._id} brand={brand}></Allbrands>)
      }
      
    </div>
  );
};

export default Products;
