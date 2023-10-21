import React from 'react';
import img1 from '../../assets/woman-getting-treatment-hairdresser-shop.jpg'

const Testimony = () => {
    return (
        <><h3 className='text-3xl'>Testimony</h3><div className="card card-side h-72 bg-base-100 shadow-xl">
            <figure><img className='w-96' src={img1} alt="Movie" /></figure>
            <div className="card-body">

                <p>I have always struggled to find the perfect beauty products that suit my skin type and enhance my natural beauty. But ever since I discovered newMua, I have been amazed by their extensive selection of high-quality skincare and makeup. Not only do their products make me feel confident and radiant, but the expert advice from their friendly staff has been a game-changer for my beauty routine. Thanks to newMua, I now look forward to every self-care session, knowing I'll achieve the stunning results I have always dreamed of. It is not just a beauty shop; it is a beauty sanctuary.</p>

            </div>
        </div></>

    );
};

export default Testimony;