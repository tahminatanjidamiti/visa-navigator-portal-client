import React, { useEffect, useState } from 'react';
import 'animate.css';

const ApplicationGuide = () => {

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(true);
            setTimeout(() => setAnimate(false), 2000);
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div>
            <h2 className="text-3xl font-extrabold mb-8 flex justify-center items-center mx-auto">Need Application Guideline</h2>
            <div className='w-9/12 mx-auto'>
                <ul className="steps steps-vertical lg:steps-horizontal">
                    <li className="step step-success">See Latest and All Visas</li>
                    <li className="step step-success">Add a visa</li>
                    <li className="step">See Added Visas and Application</li>
                    <li className="step">Apply from the details</li>
                </ul>
            </div>
            <div className='my-10 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div className={`card ${animate ? 'animate__animated animate__fadeInDown' : ''}`}>
                        <figure className='h-[400px]'>
                            <img className='h-full w-full object-cover rounded-md'
                                src="https://i.ibb.co.com/tzsqGqC/first.webp"
                                alt="Visa application pic!" />
                        </figure>

                    </div>
                    <div className={`card ${animate ? 'animate__animated animate__fadeInDown' : ''}`}>
                        <figure className='h-[400px]'>
                            <img className='h-full w-full object-cover rounded-md'
                                src="https://i.ibb.co.com/ccMcGHX3/visa-application-form-smartphone.jpg"
                                alt="Visa application pic!" />
                        </figure>

                    </div>
                    <div className={`card ${animate ? 'animate__animated animate__fadeInDown' : ''}`}>
                        <figure className='h-[400px]'>
                            <img className='h-full w-full object-cover rounded-md'
                                src="https://i.ibb.co.com/0pcHDv5H/young-couple-holding-smartphone-plane-tickets-traveling.jpg"
                                alt="Visa application pic!" />
                        </figure>

                    </div>
                </div>
            <div className='relative'>
                <div className="absolute inset-0 animate-neon-glow -z-10"></div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-10 my-10 px-4'>
                    <div className='flex items-center justify-center gap-6 w-11/12 mx-auto '>
                        <div><img src="https://img.icons8.com/?size=48&id=tnnUFgHrPmR0&format=gif" alt="Icon pic!" /></div>
                        <div className='space-y-2'><p className='font-bold text-lg'>Get the latest news and offers</p> <h2 className='font-bold text-3xl'>Subscribe to our newsletter</h2></div>
                    </div>
                    <div>
                        <div className="mt-2 join border border-sky-950">
                            <input className="input input-bordered join-item h-[60px]" placeholder="Email" />
                            <button className="btn h-[60px] join-item bg-sky-500 hover:bg-sky-800 hover:text-white">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicationGuide;