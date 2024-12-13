import React from 'react';

const ApplicationGuide = () => {
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
            <div className="card">
                <figure className='h-[400px]'>
                    <img className='h-full w-full object-cover rounded-md'
                        src="https://i.ibb.co.com/tzsqGqC/first.webp"
                        alt="Visa application pic!" />
                </figure>
                
            </div>
            <div className="card">
                <figure className='h-[400px]'>
                    <img className='h-full w-full object-cover rounded-md'
                        src="https://i.ibb.co.com/4MKwFwS/top-view-visa-application-arrangement.jpg"
                        alt="Visa application pic!" />
                </figure>
                
            </div>
            <div className="card">
                <figure className='h-[400px]'>
                    <img className='h-full w-full object-cover rounded-md'
                        src="https://i.ibb.co.com/yXJCBVW/apply-online-application-form-recruitment-concept.jpg"
                        alt="Visa application pic!" />
                </figure>
                
            </div>
            </div>
            
        </div>
    );
};

export default ApplicationGuide;