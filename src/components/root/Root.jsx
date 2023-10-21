import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../banner/Banner';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import Brand from '../brands/Brand';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;