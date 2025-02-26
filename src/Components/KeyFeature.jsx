import React from 'react';
import { Typewriter } from 'react-simple-typewriter'

const KeyFeature = () => {
    const handleType = (count) => {
        // console.log(`Word typed: ${count}`);
    };
    
      const handleDone = () => {
        // console.log(`Done after 5 loops!`)
      }

    return (
        <div className='my-20'>
            <div>
                <h1 className="text-3xl font-extrabold mb-8 flex justify-center items-center mx-auto">
                    Our Standout {' '}
                    <span style={{ color: 'green', fontWeight: 'bold', paddingLeft: '10px' }}>
                        <Typewriter
                            words={['Highlight', 'Feature!']}
                            loop={Infinity}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}
                            onType={handleType}
                        />
                    </span>
                </h1>
            </div>
            
            <p className='my-10 w-9/12 mx-auto text-center'>Unlock the key to effortless visa applications with our expert insights, up-to-the-minute updates, and tailored assistance, ensuring your international travel is smooth and stress-free.</p>
            <div>
                <div className="card bg-teal-400 mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-11/12 mx-auto">
                    <div className="card-body items-center text-center">
                        <img className='w-40 h-40 rounded-full' src="https://img.icons8.com/?size=60&id=cjaav1k9qYa5&format=gif" alt="Customer support icon!" />
                        <div className="card-actions justify-end">
                            <p className='font-bold text-2xl text-black'>Fast & Friendly Support</p>
                        </div>
                    </div>

                    <div className="card-body items-center text-center">
                        <img className='w-40 h-40 rounded-full' src="https://img.icons8.com/?size=48&id=crX4uqprHPro&format=gif" alt="Fast icon" />
                        <div className="card-actions justify-end">
                            <p className='font-bold text-2xl text-black'>Fast Performance</p>
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <img className='w-40 h-40 rounded-full' src="https://img.icons8.com/?size=48&id=9XUigfHIZFH9&format=gif" alt="Update icon!" />
                        <div className="card-actions justify-end">
                            <p className='font-bold text-2xl text-black'>Easy Lifetime Update</p>
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <img className='w-40 h-40 rounded-full' src="https://img.icons8.com/?size=40&id=ptfr1HHrBeLT&format=gif" alt="Document icon!" />
                        <div className="card-actions justify-end">
                            <p className='font-bold text-2xl text-black'>Well-Defined Documentation Structure</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default KeyFeature;