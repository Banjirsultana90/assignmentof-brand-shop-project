
import React from 'react';
import img1 from '../../assets/woman-getting-treatment-hairdresser-shop.jpg';

const Testimony = () => {
  return (
    <div className=" mt-3">
      <h3 className="text-3xl text-amber-500 font-bold">Testimony</h3>
      <div className="bg-base-100 shadow-2xl rounded-xl mb-3 md:flex">
        <div className="w-full md:w-1/3">
          <figure>
            <img className="w-full h-auto" src={img1} alt="Beauty Shop" />
          </figure>
        </div>
        <div className="w-full md:w-2/3 p-4">
          <p className='px-5 py-5'>
            I have always struggled to find the perfect beauty products that suit my skin type and enhance my natural beauty. But ever since I discovered newMua, I have been amazed by their extensive selection of high-quality skincare and makeup. Not only do their products make me feel confident and radiant, but the expert advice from their friendly staff has been a game-changer for my beauty routine. Thanks to newMua, it is not just a beauty shop; it is a beauty sanctuary.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
