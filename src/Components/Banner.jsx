import React from 'react';

const Banner = () => {
    return (
        <div className='w-10/12 mx-auto py-10'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full min-h-5">
                    <img
                        src="https://i.ibb.co.com/G9bSGMN/woman-with-suitcase-airport.jpg"
                        className="w-full h-full object-cover rounded-3xl" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle btn-info">❮</a>
                        <a href="#slide2" className="btn btn-circle btn-info">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/xDdw5mT/christmas-travel-concept-with-phone.jpg"
                        className="w-full h-full object-cover rounded-3xl" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle btn-info">❮</a>
                        <a href="#slide3" className="btn btn-circle btn-info">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/68j4csB/high-angle-passport-tickets-arrangement.jpg"
                        className="w-full h-full object-cover rounded-3xl" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle btn-info">❮</a>
                        <a href="#slide4" className="btn btn-circle btn-info">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/z2CWj8S/full-shot-travel-concept-with-landmarks.jpg"
                        className="w-full h-full object-cover rounded-3xl" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle btn-info">❮</a>
                        <a href="#slide1" className="btn btn-circle btn-info">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;