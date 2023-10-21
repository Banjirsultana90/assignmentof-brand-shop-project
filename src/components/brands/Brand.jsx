import React, { useEffect, useState } from 'react';
import Singlebrands from './Singlebrands';

const Brand = () => {
    const[brands,setbrands]=useState([])
    useEffect(()=>{

        fetch('/data.json')
        .then(res=>res.json())
        .then(data=>setbrands(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
            {/* <h3>{brands.length}</h3> */}
            {
                brands.map(brand=><Singlebrands key={brands.id} brands={brand}></Singlebrands>)
            }
        </div>
    );
};

export default Brand;