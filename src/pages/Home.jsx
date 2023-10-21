import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Banner from '../components/banner/Banner';
import Brand from '../components/brands/Brand';
import Footer from '../components/footer/Footer';
import Allbrands from '../components/All/Allbrands';
import Category from '../components/others/category';

const Home = () => {
    return (
        <div>
          
            <Banner></Banner>
            <Brand></Brand>
            <Category></Category>
           {/* <Allbrands></Allbrands> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;