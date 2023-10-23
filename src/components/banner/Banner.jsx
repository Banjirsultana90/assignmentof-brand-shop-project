import React from 'react';

const Banner = () => {
    return (
        <div className="hero max-w-screen-xl overflow-x-hidden h-56 mb-1" style={{ backgroundImage: 'url(https://i.ibb.co/k0bbcBK/composition-cosmetics-with-copy-space-yellow-background.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Discover Quality and Style at Our Brand Shop - Where Every Purchase is a Statement!</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;